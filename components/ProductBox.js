import React, { useContext } from "react";
import styled from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/CartIcon";
import Link from "next/link";
import { CartContext } from "./CartContext";

const ProductWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;

  -webkit-box-shadow: 0px 1px 5px -1px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0px 1px 5px -1px rgba(0, 0, 0, 0.22);
  box-shadow: 0px 1px 5px -1px rgba(0, 0, 0, 0.22);
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 20px;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: medium;
`;

const StyledLink = styled(Link)`
  align-self: flex-end;
  text-decoration: none;
  color: white;
  background-color: black;
  width: 90px;
  padding: 5px 10px;
  text-align: center;
`;

export default function ProductBox({ _id, title, description, price, images }) {
  const { addProduct } = useContext(CartContext);
  const url = "/product/" + _id;
  return (
    <ProductWrapper>
      <Title href={url}>{title}</Title>
      <ImageWrapper>
        <img src={images[0]} alt="" fetchpriority="auto" />
      </ImageWrapper>
      <StyledLink href={url}>Buy</StyledLink>
    </ProductWrapper>
  );
}

{
  /* <BtnAddToCart onClick={() => addProduct(_id)}>
Add to cart
</BtnAddToCart> */
}
