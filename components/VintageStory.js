import Link from "next/link";
import React, { useState } from "react";
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

const StyledWrapper = styled.div`
  margin-top: 50px;
  padding: 10px;
  margin-top: 100px;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  p {
    text-align: end;
    padding-right: 10px;
  }
  @media ${devices.laptop} {
    flex-direction: row;
  }
`;

const ContainerItemOne = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const ContainerItemTwo = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
`;

const ProductWrapperLeft = styled.div`
  margin-bottom: 25px;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  margin-top: 50px;
  -webkit-box-shadow: 0px 1px 5px -1px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0px 1px 5px -1px rgba(0, 0, 0, 0.22);
  box-shadow: 0px 1px 5px -1px rgba(0, 0, 0, 0.22);

  @media ${devices.laptop} {
    width: 80%;
  }
`;
const ProductWrapperRight = styled.div`
  margin-bottom: 25px;
  padding: 10px;
  background-color: white;
  width: 100%;
  border-radius: 5px;
  -webkit-box-shadow: 0px 1px 5px -1px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0px 1px 5px -1px rgba(0, 0, 0, 0.22);
  box-shadow: 0px 1px 5px -1px rgba(0, 0, 0, 0.22);
`;

const StyledNavs = styled(Link)`
  /* background-color: yellow; */
  display: block;
  width: 100%;
  flex-grow: 1;
  text-decoration: none;
  color: black;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

const Seperator = styled.hr`
  border-top: 3px solid black;
  width: 25%;
  margin-bottom: 10px;
  margin-bottom: 30px;
`;

const StyledAuthorName = styled.h2`
  text-decoration: none;
  color: rgb(76, 76, 76);
  font-weight: 300;
  padding-bottom: 5px;
`;
const StyledTitle = styled.h2`
  font-size: medium;
  color: grey;
  font-weight: 200;
  padding-bottom: 5px;
`;
const StyledDate = styled.h2`
  font-size: small;
  color: gray;
  font-weight: 100;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
`;

function VintageStory() {
  const [items, setItems] = useState([
    {
      author: "Pabin limbu",
      title: "summer heart",
      date: "12-FEB-25",
    },
    {
      author: "jon doe",
      title: "love stream",
      date: "12-FEB-25",
    },
    {
      author: "jerry cow",
      title: "Mountain with flower",
      date: "12-FEB-25",
    },
    {
      author: "linda olivia",
      title: "Golden goose",
      date: "12-FEB-25",
    },
  ]);

  return (
    <div>
      <StyledWrapper>
        <Seperator />
        <h2>The Vintage Stories</h2>
        <StyledContainer>
          <ContainerItemOne>
            <ProductWrapperLeft>
              <StyledNavs href={"#"}>
                <StyledImage src="vin-cam.jpg" alt="" />
                <StyledAuthorName> AUTHOR NAME</StyledAuthorName>
                <StyledTitle> Story Title</StyledTitle>
                <StyledDate> Date: 123</StyledDate>
                <p>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                    height={"20px"}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </p>
              </StyledNavs>
            </ProductWrapperLeft>
          </ContainerItemOne>
          <ContainerItemTwo>
            {items?.map((item, index) => {
              return (
                <ProductWrapperRight key={index}>
                  <StyledNavs href={"#"}>
                    <StyledAuthorName> {item.author}</StyledAuthorName>
                    <StyledTitle> {item.title}</StyledTitle>

                    <FooterContainer>
                      <StyledDate> Date: {item.date}</StyledDate>
                      <p>
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                          height={"20px"}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                          />
                        </svg>
                      </p>
                    </FooterContainer>
                  </StyledNavs>
                </ProductWrapperRight>
              );
            })}
          </ContainerItemTwo>
        </StyledContainer>
      </StyledWrapper>
    </div>
  );
}

export default VintageStory;
