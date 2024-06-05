import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import { mongooseConect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import React from "react";

export default function ProductsPage({ products }) {
  return (
    <div>
      <Header></Header>
      <Center>
        <ProductGrid products={products}></ProductGrid>
      </Center>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  await mongooseConect();
  const products = await Product.find({}, null, { sort: { _id: -1 } });

  return { props: { products: JSON.parse(JSON.stringify(products)) } };
}
