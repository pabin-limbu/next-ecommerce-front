import React, { useContext } from "react";
import Center from "./Center";
import styled from "styled-components";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";
import { CartContext } from "./CartContext";
import { device } from "@/util/breakpoints";

const Bg = styled.div`
  background-color: white;
  color: #fff;
  padding: 30px 0;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;

  /* img {
    max-width: 80%;
  } */
`;
const Column = styled.div``;

const Title = styled.h2`
  text-align: center;
  color: black;
  margin-bottom: 10px;
`;

const Desc = styled.p`
  color: grey;
  font-weight: 100;
  font-size: small;
  text-align: center;
  max-height: 77px;
  overflow: hidden;
  @media ${device.tablet} {
    max-height: 100%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  img {
    min-width: 50%;
  }

  @media ${device.tablet} {
    img {
      max-width: 30%;
    }
  }
`;

export default function Featured({ product }) {
  const { setCartProducts, addProduct } = useContext(CartContext);
  function addFeaturedToCart() {
    addProduct(product._id);
  }

  return (
    <Bg>
      <Center>
        <ColumnWrapper>
          <Column>
            <Title>{product.title}</Title>
            <Desc>{product.description}</Desc>
            <ButtonWrapper>
              <ButtonLink color="blue" href={"/product/" + product._id}>
                read more
              </ButtonLink>

              <Button size="small" onClick={addFeaturedToCart}>
                <CartIcon></CartIcon>
                Add to cart
              </Button>
            </ButtonWrapper>
            <ImageWrapper className="">
              <img src={product.images[0]} alt="image" />
            </ImageWrapper>
            s
          </Column>
        </ColumnWrapper>
      </Center>
    </Bg>
  );
}
