import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductImages from "@/components/ProductImages";
import Title from "@/components/Title";
import { mongooseConect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import React, { useContext } from "react";
import styled from "styled-components";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 40px;
  margin-top: 40px;
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;

const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

function ProductsPage({ product }) {
  const { addProduct } = useContext(CartContext);

  return (
    <div>
      {" "}
      <Header />
      <Center>
        <ColWrapper>
          <Box>
            <ProductImages images={product.images} />
          </Box>
          <div>
            <Title>{product.title}</Title>
            <p>{product.description}</p>
            <PriceRow>
              <div>{product.price}</div>
              <div className="">
                <Button primary={1} onClick={() => addProduct(product._id)}>
                  Add to cart
                </Button>
              </div>
            </PriceRow>
          </div>
        </ColWrapper>
      </Center>
    </div>
  );
}

export default ProductsPage;

export async function getServerSideProps(context) {
  await mongooseConect();

  const { id } = context.query;
  const product = await Product.findById(id);

  return { props: { product: JSON.parse(JSON.stringify(product)) } };
}
