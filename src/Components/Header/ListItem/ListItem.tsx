import React from "react";
import { NavLinkCursor, StyledNavLink } from "./StyledItemtComponents";

interface ListItemProps {
  to: string;
  children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ to, children }) => {
  return (
    <li>
      <StyledNavLink reloadDocument to={to}>
        {children}
        <NavLinkCursor />
      </StyledNavLink>
    </li>
  );
};

export default ListItem;
