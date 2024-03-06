import React from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaAlipay } from "react-icons/fa";
import Image from "next/image";
import { IconContext } from "react-icons";

const FooterWrapper = styled.div`
  height: 200px;
  width: 100%;
  background-color: #161314;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4,
  h3 {
    color: wheat;
    padding: 10px;
  }

  p {
    color: wheat;
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

const StylesImage = styled(Image)`
  object-fit: contain;
`;
const BorderSpan = styled.span`
  width: 60%;
  border-bottom: 2px solid grey;
  border-radius: 50px;
`;

function Footer() {
  return (
    <FooterWrapper>
      <div className="">
        <h3>Follow us on</h3>
        <Social>
          <IconContext.Provider
            value={{ color: "white", className: "iconSocial", size: "30px" }}
          >
            <FaInstagram />
            <FaFacebookSquare />
          </IconContext.Provider>
        </Social>
      </div>
      <BorderSpan />
      <h4>Payment</h4>
      <PaymentWrapper>
        <StylesImage width={50} height={50} src="/visa.png" alt="" />
        <StylesImage width={50} height={50} src="/mastercard.png" alt="" />
        <StylesImage width={30} height={50} src="/alipaya.png" alt="" />
      </PaymentWrapper>
      <p>Copyright &copy; 2024 | Vintage Lens All rights reserved. </p>
    </FooterWrapper>
  );
}

export default Footer;
