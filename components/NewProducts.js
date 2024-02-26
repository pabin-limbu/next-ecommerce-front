import styled from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";
import ProductGrid from "./ProductGrid";
import Title from "./Title";

export default function NewProducts({ products }) {
  console.log(products);
  return (
    <Center>
      <Title>New Arrivals</Title>
      <ProductGrid products={products}></ProductGrid>
    </Center>
  );
}
