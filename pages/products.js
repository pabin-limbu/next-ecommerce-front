import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Title from "@/components/Title";
import { mongooseConect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import React from "react";
import styled from "styled-components";

export default function ProductsPage({ products }) {
  return (
    <div>
      <Header></Header>
      <Center>
        <Title>All products</Title>
        <ProductGrid products={products}></ProductGrid>
      </Center>
    </div>
  );
}

export async function getServerSideProps() {
  await mongooseConect();
  const products = await Product.find({}, null, { sort: { _id: -1 } });

  return { props: { products: JSON.parse(JSON.stringify(products)) } };
}
