import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 5rem;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <p>INITIAL</p>
      <p>MENU-ICONS</p>
    </StyledHeader>
  );
};
