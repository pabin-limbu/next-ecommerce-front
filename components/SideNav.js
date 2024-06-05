import styled from "styled-components";
import css from "styled-jsx/css";
import Button from "./Button";
import CloseIcon from "./icons/CloseIcon";
import Link from "next/link";
import { useEffect, useState } from "react";

//styled component for sidenav
const SideNavContainer = styled.div`
  width: ${(props) => (props.show === "true" ? "100%" : "0%")};
  height: 100%;
  background-color: rgba(22, 19, 20, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.5s ease;
  overflow: hidden;
  z-index: 99;
`;

const LinkWrapper = styled.div`
  padding: 60px;
  display: flex;
  /* background-color: tomato; */
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  box-sizing: border-box;
  background-color: rgba(22, 19, 20, 0.9);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: larger;
  font-weight: bold;
  color: white;
  width: 200px;
  text-align: center;
  letter-spacing: 0.2rem;
`;

const BtnCloseWrapperDiv = styled.div`
  height: 5%;
  position: relative;
  padding-bottom: 100px;
  background-color: black;
`;

export default function SideNav({ show, toggleSideNav }) {
  useEffect(() => {
    if (show) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    }
  }, [show]);
  function handleShrink() {
    setShrink((prev) => !prev);
  }

  return (
    <SideNavContainer show={show ? "true" : "false"}>
      <BtnCloseWrapperDiv className="">
        <Button color="white" onClick={toggleSideNav}>
          <CloseIcon />
        </Button>
      </BtnCloseWrapperDiv>

      <LinkWrapper className="">
        <StyledLink onClick={toggleSideNav} href="/">
          HOME
        </StyledLink>
        <StyledLink onClick={toggleSideNav} href="/products">
          All Product
        </StyledLink>
        <StyledLink onClick={toggleSideNav} href="/categories">
          Category
        </StyledLink>
        <StyledLink onClick={toggleSideNav} href="/account">
          Account
        </StyledLink>
        <StyledLink onClick={toggleSideNav} href="/cart">
          Cart
        </StyledLink>
      </LinkWrapper>
    </SideNavContainer>
  );
}
