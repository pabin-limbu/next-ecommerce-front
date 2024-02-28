import { mongooseConect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function handler(req, res) {
  await mongooseConect();
  const ids = req.body.ids;
 // console.log(ids);
  res.json(await Product.find({ _id: ids }));
}
