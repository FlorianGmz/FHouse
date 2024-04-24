import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

const StyledNavLink = styled(Link)`
  font-size: 4rem;
  transition: transform 0.5s ease-out;
  display: list-item;
  color: white;
  &:hover {
    transform: translateX(-2rem);
  }
`;

const NavLinkCursor = styled.span`
  width: 0;
  height: 1px;
  position: absolute;
  right: -132px;
  top: 50%;
  background-color: white;
  transition: transform 0.3s ease-out;
  ${StyledNavLink}:hover & {
    width: 100px;
    transition: ease-out 0.5s;
  }
`;

interface ListItemProps {
  to: string;
  setNavIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ to, setNavIsOpen, children }) => {
  const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate(to);
  //   setNavIsOpen((open) => !open);
  // };
  return (
    <li>
      <StyledNavLink to={to}>
        {children}
        <NavLinkCursor />
      </StyledNavLink>
    </li>
  );
};

export default ListItem;
