import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductImages from "@/components/ProductImages";
import Title from "@/components/Title";
import { mongooseConect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import React, { useContext } from "react";
import styled from "styled-components";

const ColWrapper = styled.div`
  min-height: 65vh;
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
  margin-top: 20px;
`;

const Description = styled.p``;

const Price = styled.p`
  font-weight: bold;
`;
const StyledButton = styled.button`
  background-color: green;
  padding: 10px;
  border: 1px solid black;
  color: white;
`;

const StyledTable = styled.table`
  margin-top: 20px;
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
            <Description>
              {product.description} Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Reiciendis illum at rerum ut, harum dolores in
              possimus suscipit architecto voluptatum veniam magni laudantium
              aliquam, accusamus molestiae impedit quasi facilis aut dignissimos
              eius accusantium. Provident repudiandae architecto voluptatibus
              beatae ad aliquam quia ullam, natus fuga voluptate perferendis
              totam distinctio assumenda hic sunt maxime, corporis similique.
              Ducimus dolore voluptatibus accusamus nobis obcaecati repellat,
              repellendus laborum iusto molestias sit fugit eos cupiditate
              corrupti? Explicabo quisquam, inventore tempore asperiores amet,
              omnis modi incidunt aliquam temporibus est vitae et, commodi eos
              enim debitis perspiciatis unde voluptatibus. Labore voluptatem
              aspernatur, excepturi adipisci odio distinctio quod temporibus.
            </Description>

            <StyledTable>
              <thead>
                <tr>
                  <td>Specification</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>name</td>
                  <td>Camera</td>
                </tr>
                <tr>
                  <td>name</td>
                  <td>Camera</td>
                </tr>
                <tr>
                  <td>name</td>
                  <td>Camera</td>
                </tr>
                <tr>
                  <td>name</td>
                  <td>Camera</td>
                </tr>
                <tr>
                  <td>name</td>
                  <td>Camera</td>
                </tr>
                <tr>
                  <td>name</td>
                  <td>Camera</td>
                </tr>
                <tr>
                  <td>name</td>
                  <td>Camera</td>
                </tr>
              </tbody>
            </StyledTable>
            <PriceRow>
              <Price>hk${product.price}</Price>
              <div className="">
                <StyledButton onClick={() => addProduct(product._id)}>
                  Add to cart
                </StyledButton>
              </div>
            </PriceRow>
          </div>
        </ColWrapper>
      </Center>
      <Footer />
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
