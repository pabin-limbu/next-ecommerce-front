import Link from "next/link";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import Center from "./Center";
import { CartContext } from "./CartContext";
import css from "styled-jsx/css";
import SideNav from "./SideNav";
import Button from "./Button";
import CartIcon from "./icons/CartIcon";
import MenuIcon from "./icons/MenuIcon";
import logoMobile from "@/public/next.svg";
import Image from "next/image";

const StyledHeader = styled.header`
  background-color: #161314;
`;

//since Link is a react component and not a regular HTML element the way of styling it is different than html element.
const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
`;

const StyledNav = styled.nav`
  display: none;
  gap: 15px;
`;

const NavLink = styled(Link)`
  color: #aaa;
  text-decoration: none;
`;

const CartStyledButton = styled.button`
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  margin-right: 5px;
  align-items: center;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  background: transparent;
  color: white;
  position: relative;
  svg {
    height: 30px;
  }
`;

const StyledCartIndicator = styled.span`
  background-color: #fccb4e;
  border-radius: 100%;
  padding: 7px;
  position: absolute;
  top: 0px;
  left: 30px;
  width: 18px;
  height: 18px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  /* z-index: 0; */
`;

const StyledLink = styled(Link)`
  color: white;
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [show, setShow] = useState(false);
  function toggleSideNav() {
    setShow((prev) => !prev);
  }
  return (
    <StyledHeader>
      <Center view={"full"}>
        <Wrapper>
          <Button onClick={toggleSideNav}>
            <MenuIcon />
          </Button>
          <SideNav show={show} toggleSideNav={toggleSideNav} />
          <Image width={150} height={50} src={"/logoMobile.png"} alt="logo" />
          <CartStyledButton>
            <StyledLink href={"/cart"}>
              <CartIcon />
              <StyledCartIndicator href={"/cart"}>10</StyledCartIndicator>
            </StyledLink>
          </CartStyledButton>
          <StyledNav>
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/products"}>All products</NavLink>
            <NavLink href={"/categories"}>Category</NavLink>
            <NavLink href={"/account"}>Account</NavLink>
            <NavLink href={"/cart"}>Cart ({cartProducts?.length})</NavLink>
          </StyledNav>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
