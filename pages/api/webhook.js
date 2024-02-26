import { mongooseConect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import { buffer } from "micro";

const endpointSecret =
  "whsec_2097a3fd5edb8a8c4b1f4aed99ca0bbf67b44d7fc4c9894a28f0d97ee0384c65";

export default async function handler(req, res) {
  await mongooseConect();

  const sig = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      await buffer(req),
      sig,
      endpointSecret
    );
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const data = event.data.object;
      // Then define and call a function to handle the event payment_intent.succeeded

      const orderID = data.metadata.orderID;

      const paid = data.payment_status === "paid";

      if (orderID && paid) {
        await Order.findByIdAndUpdate(orderID, { paid: true });
      }

      console.log(data);

      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  res.status(200).send("Payment successfull");
}

export const config = {
  api: { bodyParser: false },
};

//polite-fave-goood-fine
//acct_1Oh7HCLroJhUXXMD
