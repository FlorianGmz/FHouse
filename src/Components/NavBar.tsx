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
    @media only screen and (max-width: 770px) {
      margin-left: 50px;
      margin-bottom: 1rem;
    }
  }
  &.bottom {
    width: fit-content;
    margin: 0px auto 200px;
    @media only screen and (max-width: 770px) {
      margin-bottom: 100px;
    }
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
    ${StyledNavBar}:hover & {
      transform: translateY(-22px);
    }
  }
`;

const StyledUnderline = styled.span`
  background-color: black;
  height: 1px;
  width: 100%;
  margin: 5px 0 0;
  transition: ease 0.25s;

  ${StyledNavBar}:hover & {
    width: 0;
  }
`;

interface NavBarProps {
  position: string;
  children: string;
}

const NavBar: React.FC<NavBarProps> = ({ position, children }) => {
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
        <StyledNavLink to="projects">{children}</StyledNavLink>
        <StyledNavLink className="hidden" to="projects">
          {children}
        </StyledNavLink>
      </div>
      <StyledUnderline />
    </StyledNavBar>
  );
};

export default NavBar;
