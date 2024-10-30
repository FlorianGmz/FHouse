import styled, { keyframes } from "styled-components";

const backgroundFadeIn = keyframes`
  from{
    background-color:#101010f8;
  }
  to{
    background-color: transparent;
  }
`;

const backgroundFadeOut = keyframes`
  from{
    background-color: transparent ;
  }
  to{
    background-color: #101010f8;
  }
`;

export const StyledNavList = styled.nav<{ $navOpen: boolean }>`
  display: block;
`;

export const StyledList = styled.ul<{ $navOpen: boolean }>`
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 0.5rem;
  padding: 0rem 100px;
  height: 100vh;
  width: 100vw;
  animation: 0.5s ${backgroundFadeIn} ease-in-out forwards;
  @media only screen and (max-width: 770px) {
    padding: 0;
    font-size: 2rem;
    font-weight: 500;
  }
  &.clicked {
    animation: 0.5s ${backgroundFadeOut} ease-in-out forwards;
  }
`;
