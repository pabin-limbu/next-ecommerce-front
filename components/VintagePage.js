import Link from "next/link";
import React from "react";
import styled from "styled-components";

const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: rgb(245, 245, 245);

  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
`;
const ContainerDiv = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: auto;
  gap: 20px;

  @media ${devices.laptop} {
    grid-template-columns: 1.5fr 1fr;
    .item-1 {
      grid-row-start: 1;
      grid-row-end: 3;
    }
  }
`;
const ProductWrapperDiv = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  .product1 {
    max-width: 900px;
  }

  @media ${devices.laptop} {
    padding: 50px;
  }
`;

const Product = styled.div`
  background-color: white;
  padding: 15px;
  width: 100%;
  /* max-width: 600px; */
  -webkit-box-shadow: 0px 1px 5px -1px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0px 1px 5px -1px rgba(0, 0, 0, 0.22);
  box-shadow: 0px 1px 5px -1px rgba(0, 0, 0, 0.22);

  @media ${devices.laptop} {
    width: 85%;
  }
`;
const ImageDiv = styled.div`
  width: 100%;
  height: auto;
`;
const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledLink = styled(Link)`
  border: 0;
  cursor: pointer;
  display: inline-flex;
  margin-right: 5px;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  background: transparent;
  color: red;
  align-self: flex-end;
  svg {
    width: 30px;
    height: 30px;
  }
`;
const Title = styled.h1`
  font-size: 1.5rem;
  padding-top: 10px;
  font-weight: 200;
`;
const Description = styled.h2`
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 0.75rem;
  color: gray;
  font-weight: 100;
`;
const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const StyledTitleContainer = styled.div`
  width: 100%;
  align-items: center;
  text-align: center;
`;

const ViewMoreBtn = styled(Link)`
  text-decoration: none;
  color: red;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 10px 20px;
`;

function VintagePage({ vintageProduct }) {
  return (
    <Wrapper>
      <StyledTitleContainer className="">
        <h2>The Vintage</h2>
      </StyledTitleContainer>
      <ContainerDiv>
        {vintageProduct?.map((product, index) => {
          return (
            <ProductWrapperDiv
              key={product._id}
              className={`item-${index + 1}`}
            >
              <Product className="product1">
                <ImageDiv>
                  <StyledImg src={product.images[0]} />
                </ImageDiv>
                <ContentDiv>
                  <Title>{product.title}</Title>
                  <Description>{product.description}</Description>
                  <StyledLink href={`/product/${product._id}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                      height={"30px"}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </StyledLink>
                </ContentDiv>
              </Product>
            </ProductWrapperDiv>
          );
        })}
      </ContainerDiv>
      <div className="btnViewMore">
        <ViewMoreBtn href={"/products"}>View more</ViewMoreBtn>
      </div>
    </Wrapper>
  );
}

export default VintagePage;
