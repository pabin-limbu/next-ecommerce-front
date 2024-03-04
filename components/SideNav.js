import styled from "styled-components";
import css from "styled-jsx/css";
import Button from "./Button";
import CloseIcon from "./icons/CloseIcon";
import Link from "next/link";

//styled component for sidenav
const SideNavContainer = styled.div`
  width: 0%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.5s ease;
  /* background-color: #161314; */
  overflow: hidden;
  z-index: 99;

  ${(props) =>
    props.show == true &&
    css`
      width: 100%;
      max-width: 100%;
    `}
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
  gap: 10px;
  box-sizing: border-box;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: large;
  font-weight: bold;
  color: white;
  width: 100px;
`;

const BtnCloseWrapperDiv = styled.div`
  height: 5%;
  position: relative;
`;

const TestDiv = styled.div`
  position: relative;
  background-color: rebeccapurple;
`;
export default function SideNav({ show, toggleSideNav }) {
  //   console.log(show);
  //   if (show) {
  //     document.getElementsByTagName("body")[0].style.overflow = "hidden";
  //   } else {
  //     document.getElementsByTagName("body")[0].style.overflow = "auto";
  //   }

  // use document in use effect.

  return (
    <SideNavContainer show={show}>
      <BtnCloseWrapperDiv className="">
        <Button onClick={toggleSideNav}>
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
