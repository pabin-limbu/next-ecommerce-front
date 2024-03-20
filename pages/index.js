import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { mongooseConect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import React, { useState } from "react";

export default function HomePage({ featuredProduct, newProduct }) {
  return (
    <div>
      <Header />
      <Featured product={featuredProduct} />
      <NewProducts products={newProduct} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const feturedProductID = "65f2a1b6831f2ec7265b8e4b";
  await mongooseConect();
  const featuredProduct = await Product.findById(feturedProductID); // product is a mongodb object which is not accepted as props. so change it in string and change it into json.
  //recent product
  const newProduct = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  }); // Parameter: filter(filter by date,name etc),projection(which data is needed),options(what to do with those data)
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProduct: JSON.parse(JSON.stringify(newProduct)),
    },
  };
}
