import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavBar = styled.div`
  display: flex;
  padding: 0rem 5rem;
  gap: 2rem;
`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <NavLink to={"projects"}>Projects</NavLink>
      <NavLink to={"/models"}>Models</NavLink>
    </StyledNavBar>
  );
};

export default NavBar;
