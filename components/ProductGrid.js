import React from "react";
import ProductBox from "./ProductBox";
import styled from "styled-components";

const StyledProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  /* padding: 30px; */
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
