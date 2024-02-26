import { mongooseConect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
import { Product } from "@/models/Product";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.json("should be POST request");
    return;
  }

  await mongooseConect();

  const {
    cartProducts,
    name,
    email,
    city,
    postalCode,
    country,
    streetAddress,
  } = req.body;

  const productsIds = cartProducts;
  const uniqueIds = [...new Set(productsIds)];

  const productInfos = await Product.find({ _id: uniqueIds });

  let line_items = [];
  for (const productId of uniqueIds) {
    const productInfo = productInfos.find(
      (p) => p._id.toString() === productId
    );
    const quantity = productsIds.filter((id) => id === productId)?.length || 0;
    if (quantity > 0 && productInfo) {
    }
    line_items.push({
      quantity,
      price_data: {
        currency: "usd",
        product_data: { name: productInfo.title },
        unit_amount: productInfo.price * 100,
      },
    });
  }

  //create order.
  const orderDoc = await Order.create({
    line_items: line_items,
    name: name,
    email: email,
    city: city,
    postalCode: postalCode,
    streetAddress: streetAddress,
    country: country,
    paid: false,
  });

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    customer_email: email,
    success_url: process.env.PUBLIC_URL + "/cart?success=true",
    cancel_url: process.env.PUBLIC_URL + "/cart?canceled=1",
    metadata: { orderID: orderDoc._id.toString() },
  });

  // res.json({ line_items });
  res.json({ url: session.url });
}
// Stripe:
