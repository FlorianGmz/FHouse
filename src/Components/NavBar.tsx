import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavBar = styled.div`
  display: flex;
  &.top {
    gap: 4rem;
    padding: 0rem 9rem;
    letter-spacing: 0.3rem;
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
