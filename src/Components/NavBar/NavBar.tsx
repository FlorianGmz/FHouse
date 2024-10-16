import {
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "50px",
          overflow: "hidden",
        }}
      >
        <StyledNavLink to="/projects">{children}</StyledNavLink>
        <StyledNavLink className="hidden" to="/projects">
          {children}
        </StyledNavLink>
      </div>
      <StyledUnderline />
    </StyledNavBar>
  );
};

export default NavBar;
