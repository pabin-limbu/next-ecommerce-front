// This component is centered.

import styled, { css } from "styled-components";
import { device } from "@/util/breakpoints";

const StyledDiv = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 0 20px;
  overflow: hidden;
  @media ${device.mobile_S} {
   max-width: 100%;
  }
  @media ${device.tablet} {
    max-width: 80%;
  }
`;

export default function Center({ children, view }) {
  return <StyledDiv view={view}>{children}</StyledDiv>;
}
