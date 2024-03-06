import React, { useContext } from "react";
import styled from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/CartIcon";
import Link from "next/link";
import { CartContext } from "./CartContext";

const WhiteBox = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 100%;
  background-color: white;
`;

const ImageWrapper = styled.div`
  width: 70%;
  height: 200px;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const Title = styled(Link)`
  text-decoration: none;
  color: black;
  text-transform: capitalize;
`;

const ProductInfoBox = styled.div`
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: 2px;
`;

const Price = styled.p`
  font-size: 1rem;
  font-weight: bold;
  display: block;
  width: 100%;
  margin-top: 10px;
`;

const ProductWrapper = styled.div`
  width: 100%;
  height: 305px;

  -webkit-box-shadow: 1px 1px 13px -3px rgba(0, 0, 0, 0.64);
  -moz-box-shadow: 1px 1px 13px -3px rgba(0, 0, 0, 0.64);
  box-shadow: 1px 1px 13px -3px rgba(0, 0, 0, 0.64);
  border-radius: 5px;
`;

const BtnAddToCart = styled.button`
  width: 95%;
  padding: 5px;
  background-color: #e9aa16;
  border-color: #fccb4e;
  border-radius: 2px;
  margin-top: 4px;
  font-weight: bold;
`;

export default function ProductBox({ _id, title, description, price, images }) {
  const { addProduct } = useContext(CartContext);

  const url = "/product/" + _id;
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <ImageWrapper>
          <img src={images[0]} alt="" />
        </ImageWrapper>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price className="">HK${price}</Price>
          <BtnAddToCart onClick={() => addProduct(_id)}>
            Add to cart
          </BtnAddToCart>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
