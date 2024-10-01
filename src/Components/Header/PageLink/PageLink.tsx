import React from "react";
import { NavLinkCursor, StyledNavLink } from "./StyledLinkComponents";

interface ListItemProps {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}

const PageLink: React.FC<ListItemProps> = ({ to, children, onClick }) => {
  return (
    <li onClick={onClick}>
      <StyledNavLink reloadDocument to={to}>
        {children}
        <NavLinkCursor />
      </StyledNavLink>
    </li>
  );
};

export default PageLink;
