import React from "react";
import ProductBox from "./ProductBox";
import styled from "styled-components";
import { device } from "@/util/breakpoints";

const StyledProductGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-top: 30px;
  margin-bottom: 30px;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
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
