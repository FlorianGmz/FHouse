import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavBar = styled.div`
  width: max-content;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  letter-spacing: 0.5rem;
  &.top {
    margin: 0px 100px 4rem;
  }
  &.bottom {
    margin: 100px auto 100px;
  }
  &.right {
    padding: 0rem 9rem 2.5rem;
    letter-spacing: 0.3rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  transition: ease-in-out 0.5s;
  ${StyledNavBar}:hover & {
    transform: translateY(-50px);
  }
  &.hidden {
    display: none;
  }
`;

const StyledUnderline = styled.span`
  background-color: black;
  height: 1px;
  width: 100%;
  margin: 10px 0 0;
  display: inline-block;
  left: 0;
  transition: linear 0.25s;
  ${StyledNavBar}:hover & {
    width: 0;
  }
`;

interface NavBarProps {
  position: string;
}

const NavBar: React.FC<NavBarProps> = ({ position }) => {
  return (
    <StyledNavBar className={position}>
      <StyledNavLink to="projects">Projects</StyledNavLink>
      <StyledNavLink className="hidden" to="projects">
        Projects
      </StyledNavLink>
      <StyledUnderline />
    </StyledNavBar>
  );
};

export default NavBar;
