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
  /* background-color: red; */
`;

const Box = styled.div`
  /* background-color: blue; */
  border-radius: 10px;
  padding: 10px;
`;

const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 50px;
  padding: 10px;
`;

const Description = styled.p`
  font-weight: 100;
  text-align: left;
  background-color: white;
  padding: 10px;
`;

const Price = styled.p`
  font-weight: 700;
`;
const StyledButton = styled.button`
  background-color: #f63409;
  padding: 10px 20px;
  border: 1px solid white;
  color: white;
  border-radius: 7px;
`;

const TableWrapper = styled.div`
  background-color: white;
  margin-top: 30px;
  min-height: 100px;
  padding: 10px;
`;

const StyledTable = styled.table`
  th {
    padding-bottom: 15px;
  }

  tbody tr:nth-child(even) {
    background-color: lightgrey;
  }
  tbody tr:nth-child(odd) {
    background-color: #f4f4f4;
  }
  tbody tr td {
    padding: 5px;
    text-transform: capitalize;
  }
  tbody tr td:nth-child(even) {
    width: 100%;
  }
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
            <Description>{product.description}</Description>
            <TableWrapper>
              <StyledTable>
                <thead>
                  <tr>
                    <th>Specifications</th>
                  </tr>
                </thead>
                <tbody>
                  {product.stats.map((spec, index) => {
                    return (
                      <tr key={index}>
                        <td>{spec.name}</td>
                        <td>{spec.value}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </StyledTable>
            </TableWrapper>
            <PriceRow>
              <Price>Price hk$ : {product.price}</Price>
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
