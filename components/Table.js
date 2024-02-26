import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  th {
    text-transform: uppercase;
    color: #aaa;
    font-weight: 600;
    text-align: left;
    font-size: 1rem;
  }
  td{
    
  }
`;

export default function Table(props) {
  return <StyledTable {...props} />;
}
