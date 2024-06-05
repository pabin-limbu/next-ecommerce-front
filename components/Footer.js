import React from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const FooterWrapper = styled.div`
  height: 400px;
  width: 100%;
  background-color: #161314;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4,
  h3 {
    color: white;
    padding: 10px;
  }

  p {
    color: white;
    font-size: small;
  }
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding-bottom: 10px;
`;

const PaymentWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

const StylesImage = styled.img`
  object-fit: contain;
`;
const BorderSpan = styled.span`
  width: 60%;
  border-bottom: 2px solid grey;
  border-radius: 50px;
`;
const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 5px;
  height: 100%;
  width: 100%;
`;
const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.div`
  padding-bottom: 10px;
`;
const MyList = styled.div`
  ul {
    text-decoration: none;
  }
  li {
  }
  li a {
    text-decoration: none;
    color: white;
    padding-right: 10px;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <GridDiv>
        <LeftDiv>
          <Logo>
            <svg
              width="150"
              height="150"
              viewBox="0 0 282 276"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M112.644 275.017L253.05 23.9611"
                stroke="#F60909"
                strokeWidth="2"
              />
              <path
                d="M205.611 0.915283L205.753 118.607L203.898 253.875L278.556 253.645"
                stroke="#FFFCFC"
                strokeWidth="6"
              />
              <path
                d="M0.0517883 23.7473L6.42057 23.6565L118.864 251.811L115.814 258.029L0.0517883 23.7473Z"
                fill="#FFF7F7"
              />
            </svg>
          </Logo>
          <MyList>
            <ul>
              <li>
                <a href="">About</a>
                <a href="">Support</a>
                <a href="">Accounts</a>
              </li>
            </ul>
          </MyList>
        </LeftDiv>
        <RightDiv>
          <div className="">
            <h3>Follow us on</h3>
            <Social>
              <FaInstagram color="white" size="30px" />
              <FaFacebookSquare color="white" size={"30px"} />
            </Social>
          </div>
          <BorderSpan />
          <h4>Payment</h4>
          <PaymentWrapper>
            <StylesImage width={50} height={50} src="/visa.png" alt="" />
            <StylesImage width={50} height={50} src="/mastercard.png" alt="" />
          </PaymentWrapper>
        </RightDiv>
      </GridDiv>
      <p>Copyright &copy; 2024 | Vintage Lens All rights reserved. </p>
    </FooterWrapper>
  );
}

export default Footer;
