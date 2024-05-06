import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavBar = styled.div`
  position: relative;
  top: 0;
  width: auto;
  height: 25px;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
  &.top {
    margin: 0px 100px 4rem;
  }
  &.bottom {
    margin: 100px auto 100px;
  }
  &.right {
    padding-right: 100px;
  }
`;

const StyledNavLink = styled(NavLink)`
  transition: ease-in-out 0.25s;

  ${StyledNavBar}:hover & {
    transform: translateY(-50px);
  }

  &.hidden {
    opacity: 1;
    ${StyledNavBar}:hover & {
      opacity: 1;
      transform: translateY(-20px);
    }
  }
`;

const StyledUnderline = styled.span`
  background-color: black;
  height: 1px;
  width: 100%;
  margin: 5px 0 0;
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
