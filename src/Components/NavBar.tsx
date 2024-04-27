import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavBar = styled.div`
  display: flex;
  font-size: 1.3rem;
  &.top {
    gap: 4rem;
    padding: 0px 100px;
    margin-bottom: 400px;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }
  &.bottom {
    justify-content: center;
    gap: 15rem;
    letter-spacing: 0.5rem;
    margin: 5rem;
  }
  &.right {
    gap: 4rem;
    padding: 0rem 9rem 2.5rem;
    letter-spacing: 0.3rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  border-bottom: solid black 1px;
  padding: 0.5rem 0rem;
  transition: ease-in-out 0.5s;
  &:hover {
    transition: ease-in-out 0.5s;
    border: none;
  }
`;

interface NavBarProps {
  position: string;
}

const NavBar: React.FC<NavBarProps> = ({ position }) => {
  return (
    <StyledNavBar className={position}>
      <StyledNavLink to="projects">Projects</StyledNavLink>
    </StyledNavBar>
  );
};

export default NavBar;
