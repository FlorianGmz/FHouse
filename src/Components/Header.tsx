import styled, { css } from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.5rem 5rem;
  background-color: cyan;
`;

const NavLogo = styled.div`
  display: flex;
  cursor: pointer;
`;

const HeaderFElement = styled.div``;
const HeaderHElement = styled.div``;

const NavIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 1rem;
  width: 50px;
  height: 15px;
  cursor: pointer;
  z-index: 10;
`;

const Icon = styled.div`
  ${(props?) =>
    props.as === "top" &&
    css`
      width: 5rem;
      height: 0.5rem;
      background-color: black;
      border-radius: 0.5rem;
      transition: ease-in 0.3s;
      ${NavIcon}:hover & {
        width: 3rem;
        transition: ease-out 0.3s;
      }
    `}
  ${(props?) =>
    props.as === "bottom" &&
    css`
      width: 3rem;
      height: 0.5rem;
      background-color: black;
      border-radius: 0.5rem;
      transition: ease-in 0.3s;
      ${NavIcon}:hover & {
        width: 5rem;
        transition: ease-out 0.3s;
      }
    `}
  ${(props) => props.click && css``}
`;

export const Header = () => {
  return (
    <StyledHeader>
      <NavLogo>
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
      </NavLogo>
      <NavIcon>
        <Icon as="top"></Icon>
        <Icon as="bottom"></Icon>
      </NavIcon>
    </StyledHeader>
  );
};
