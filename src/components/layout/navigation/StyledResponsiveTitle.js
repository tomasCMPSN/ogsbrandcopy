import styled from "styled-components";

export const StyledResponsiveTitle = styled.div`
  font-weight: bold;
  color: black;
  text-align: center;

  @media only screen and (min-width: 1200px) {
    display: none;
  }
`;
