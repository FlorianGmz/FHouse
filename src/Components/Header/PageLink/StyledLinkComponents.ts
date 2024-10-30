import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavLink = styled(Link)`
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
  font-size: 3.7rem;
  animation: fadeIn 1s ease-out;
  transition: transform 0.5s ease-out;
  display: list-item;
  color: white;
  @media only screen and (max-width: 770px) {
    padding: 0 50px;
    font-size: 2.2rem;
    font-weight: 500;
  }
  &:hover {
    transform: translateX(-2rem);
  }
`;

export const NavLinkCursor = styled.span`
  width: 0;
  height: 1px;
  position: absolute;
  right: -132px;
  top: 50%;
  background-color: white;
  transition: transform 0.3s ease-out;
  ${StyledNavLink}:hover & {
    width: 100px;
    transition: ease-out 0.5s;
  }
`;
