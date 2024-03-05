import styled from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";
import ProductGrid from "./ProductGrid";
import Title from "./Title";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;

export default function NewProducts({ products }) {
  // console.log(products);
  return (
    <Center>
      <Wrapper>
        <Title>New Arrivals</Title>
        <ProductGrid products={products}></ProductGrid>
      </Wrapper>
    </Center>
  );
}
