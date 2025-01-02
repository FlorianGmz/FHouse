import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavBar = styled.div`
  position: relative;
  top: 0;
  width: auto;
  height: 35px;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
  &.top {
    margin: 0px 100px 4rem;
    @media only screen and (max-width: 770px) {
      margin-left: 25px;
    }
  }
  &.bottom {
    width: fit-content;
    margin: 100px auto 200px;
    height: 25px;
    font-size: 1rem;
    @media only screen and (max-width: 770px) {
      margin-bottom: 100px;
      font-size: 0.9rem;
    }
  }
  &.right {
    padding-right: 100px;
  }
`;

export const StyledLinkDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 30px;
  overflow: hidden;
  @media only screen and (max-width: 770px) {
    height: 25px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  transition: ease-out 0.4s;

  ${StyledNavBar}:hover & {
    transform: translateY(-50px);
  }

  &.hidden {
    ${StyledNavBar}:hover & {
      transform: translateY(-24px);
    }
  }
`;

export const StyledUnderline = styled.span`
  background-color: black;
  height: 1px;
  width: 100%;
  margin: 5px 0 0;
  transition: ease 0.25s;

  ${StyledNavBar}:hover & {
    width: 0;
  }
`;
