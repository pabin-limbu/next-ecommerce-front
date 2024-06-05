import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Table from "@/components/Table";
import axios from "axios";
import { Router, useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const ColumnWrapper = styled.div`
  /* display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 40px;
  margin-top: 40px;
  min-height: 60vh; */
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  max-height: 60vh;
  overflow: scroll;
  margin-top: 20px;
`;
const InfoBox = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  margin-top: 20px;
`;

const ProductInfoCell = styled.td`
  padding: 10px 0;
  /* border-top: 1px solid rgba(0, 0, 0, 1); */
`;

const ProductImageBox = styled.div`
  max-width: 100px;
  max-height: 100px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 80px;
    max-height: 80px;
  }
`;

const QuantityLabel = styled.span`
  padding: 0 5px;
`;

const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`;

const TotalPrice = styled.p`
  font-weight: bold;
  text-align: right;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: lightgray;
`;

const CheckOutBtn = styled.button`
  padding: 10px;
  background-color: green;
  font-weight: bold;
  color: white;
  border-color: white;
  margin-top: 20px;
`;

export default function CartPage() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostaCode] = useState("");
  const [streeAddress, setStreetAddress] = useState("");
  const [country, setCountry] = useState("");
  const [isSccess, setIsSuccess] = useState(false);
  const { cartProducts, addProduct, removeProduct, clearCart } =
    useContext(CartContext);
  const router = useRouter();

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios
        .post("/api/cart", { ids: cartProducts })
        .then((res) => setProducts(res.data));
    }
  }, [cartProducts]);

  useEffect(() => {
    if (window.location.href.includes("success")) {
      console.log(" i am a useeffect");
      setIsSuccess(true);
      clearCart();
    }
  }, []);

  function moreOfTheProduct(id) {
    addProduct(id);
  }

  function lessOfThisProduct(id) {
    //console.log(id);
    removeProduct(id);
  }

  async function goToPayment() {
    const response = await axios.post("/api/checkout", {
      name,
      email,
      city,
      postalCode,
      setStreetAddress,
      country,
      cartProducts,
    });

    if (response.data.url) {
      window.location = response.data.url;
    }
  }

  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }

  if (isSccess) {
    return (
      <>
        <Header />
        <Center>
          <ColumnWrapper>
            <Box>
              <h1>Thanks For your order!</h1>
              <p>we will email your order</p>
            </Box>
          </ColumnWrapper>
          <button onClick={clearCart}>clear</button>
        </Center>
      </>
    );
  }

  return (
    <>
      <Header />
      <Center>
        <ColumnWrapper>
          <Box>
            <h2>cart</h2>
            {!cartProducts?.length && (
              <div className="">
                <p>Your cart is empty</p>
              </div>
            )}

            {cartProducts.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Qnt</th>
                    <th>price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => {
                    return (
                      <tr key={product._id}>
                        <ProductInfoCell>
                          <ProductImageBox>
                            <img
                              fetchpriority="auto"
                              src={product.images[0]}
                              alt=""
                            />
                          </ProductImageBox>
                          {product.title}
                        </ProductInfoCell>
                        <td>
                          <Button
                            onClick={() => lessOfThisProduct(product._id)}
                          >
                            -
                          </Button>
                          <QuantityLabel>
                            {
                              cartProducts.filter((id) => id === product._id)
                                .length
                            }
                          </QuantityLabel>
                          <Button onClick={() => moreOfTheProduct(product._id)}>
                            +
                          </Button>
                        </td>
                        <td>
                          $
                          {cartProducts.filter((id) => id === product._id)
                            .length * product.price}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            )}

            {cartProducts.length > 0 ? (
              <TotalPrice>TOTAL PRICE : HK${total}</TotalPrice>
            ) : (
              <button
                onClick={() => {
                  router.push("/");
                }}
              >
                Back to shopping
              </button>
            )}
          </Box>

          {cartProducts?.length !== 0 && (
            <InfoBox>
              <h2>Order information</h2>

              <Input
                type="text"
                placeholder="Name"
                value={name}
                name="name"
                onChange={(event) => setName(event.target.value)}
              />
              <Input
                type="text"
                placeholder="Email"
                value={email}
                name="email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <CityHolder>
                <Input
                  type="text"
                  placeholder="City"
                  value={city}
                  name="city"
                  onChange={(event) => setCity(event.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Postal code"
                  value={postalCode}
                  name="postalCode"
                  onChange={(event) => setPostaCode(event.target.value)}
                />
              </CityHolder>
              <Input
                type="text"
                placeholder="Street address"
                value={streeAddress}
                name="streeAddress"
                onChange={(event) => setStreetAddress(event.target.value)}
              />
              <Input
                type="text"
                placeholder="Country"
                value={country}
                name="country"
                onChange={(event) => setCountry(event.target.value)}
              />
              <CheckOutBtn black={1} block={1} onClick={goToPayment}>
                Continue to checkout
              </CheckOutBtn>
            </InfoBox>
          )}
        </ColumnWrapper>
      </Center>
      <Footer />
    </>
  );
}
