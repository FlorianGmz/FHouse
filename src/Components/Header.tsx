import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 3.5rem 5rem;
  background-color: cyan;
`;

const Logo = styled.div`
  display: flex;
`;

const HeaderFElement = styled.div``;
const HeaderHElement = styled.div``;

export const Header = () => {
  return (
    <StyledHeader>
      <Logo>
        <HeaderFElement>
          F<span>A</span>
          <span>R</span>
          <span>O</span>
        </HeaderFElement>
        <HeaderHElement>
          h<span>o</span>
          <span>u</span>
          <span>s</span>
          <span>e</span>
        </HeaderHElement>
      </Logo>
      <p>MENU-ICONS</p>
    </StyledHeader>
  );
};
