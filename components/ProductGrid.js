import React from "react";
import ProductBox from "./ProductBox";
import styled from "styled-components";

const StyledProductGrid = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

export default function ProductGrid({ products }) {
  return (
    <StyledProductGrid>
      {products?.map((product) => (
        <ProductBox key={product._id} {...product}></ProductBox>
      ))}
    </StyledProductGrid>
  );
}
