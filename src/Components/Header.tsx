import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 3.5rem 5rem;
  background-color: cyan;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <p>INITIAL</p>
      <p>MENU-ICONS</p>
    </StyledHeader>
  );
};
