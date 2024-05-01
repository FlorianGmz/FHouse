import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavBar = styled.div`
  position: relative;
  top: 0;
  width: max-content;
  height: 80px;
  display: flex;
  flex-direction: column;
  text-align: center;
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
    transform: translateY(-30px);
  }

  &.hidden {
    opacity: 1;
    ${StyledNavBar}:hover & {
      opacity: 1;
      transform: translateY(-30px);
    }
  }
`;

const StyledUnderline = styled.span`
  background-color: black;
  height: 1px;
  width: 100%;
  margin: 10px 0 0;
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "30px",
          overflow: "hidden",
        }}
      >
        <StyledNavLink to="projects">Projects</StyledNavLink>
        <StyledNavLink className="hidden" to="projects">
          Projects
        </StyledNavLink>
      </div>
      <StyledUnderline />
    </StyledNavBar>
  );
};

export default NavBar;
