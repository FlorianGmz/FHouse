import {
  StyledLinkDiv,
  StyledNavBar,
  StyledNavLink,
  StyledUnderline,
} from "./StyledNavBarComponents";

interface NavBarProps {
  position: string;
  children: string;
}

const NavBar: React.FC<NavBarProps> = ({ position, children }) => {
  return (
    <StyledNavBar className={position}>
      <StyledLinkDiv>
        <StyledNavLink to="projects">{children}</StyledNavLink>
        <StyledNavLink className="hidden" to="projects">
          {children}
        </StyledNavLink>
      </StyledLinkDiv>
      <StyledUnderline />
    </StyledNavBar>
  );
};

export default NavBar;
