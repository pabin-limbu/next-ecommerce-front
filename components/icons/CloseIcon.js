import styled from "styled-components";

export default function CloseIcon({ className = "w-6 h-6" }) {
  const StyledCloseIcon = styled.svg`
    position: absolute;
    top: 10px;
    right: 0px;
  `;

  return (
    <StyledCloseIcon
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </StyledCloseIcon>
  );
}
