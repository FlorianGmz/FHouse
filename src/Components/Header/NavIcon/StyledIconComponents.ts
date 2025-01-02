import styled, { css } from "styled-components";

export const NavIconDiv = styled.div`
  top: 55px;
  position: fixed;
  width: 50px;
  margin-top: 16px;
  right: 100px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  width: 7rem;
  align-items: flex-end;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  @media only screen and (max-width: 770px) {
    right: 25px;
  }
`;

export const Icon = styled.div<{
  $position: string;
  $currentPathname: string;
  $navOpen: boolean;
}>`
  ${(props) =>
    props?.$position === "top" &&
    css`
      background-color: ${props.$currentPathname === "/contact"
        ? "white"
        : props?.$navOpen
          ? "white"
          : "black"};
      width: 3rem;
      height: 0.2rem;
      border-radius: 0.2rem;
      transition: ease-in 0.3s;
      ${NavIconDiv}:hover & {
        width: ${props.$navOpen ? "2rem" : "1.5rem"};
        transition: ease-out 0.3s;
      }

      &.clicked {
        width: 2rem;
        transform: translate(0rem, 6px) rotate(45deg);
        transition: ease-out 3s;
      }
    `}
  ${(props) =>
    props?.$position === "bottom" &&
    css`
      background-color: ${
        props.$currentPathname === "/contact"
          ? "white"
          : props?.$navOpen
            ? "white"
            : "black"
      };
      width: 1.5rem;
      height: 0.2rem;
      border-radius: 0.2rem;
      transition: ease-in 0.3s;
      ${NavIconDiv}:hover & {
        width: ${props.$navOpen ? "2rem" : "3rem"};
        transition: ease-out 0.3s;
      }
      &.clicked {
        width: 2rem;
        transform: translate(0rem, -6px) rotate(-45deg);
        transition: ease-out 1s;
        height
      }
    `}
`;
