import React from "react";
import { projectState } from "../@types/types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ItemDiv = styled(Link)`
  width: 30rem;
  height: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  object-position: center;
`;

const CarousselItem: React.FC<projectState> = ({ project }) => {
  const { image, name, id } = project;
  return (
    <ItemDiv to={`projects/${id}`}>
      <StyledImg src={image} />
      <p>{name}</p>
    </ItemDiv>
  );
};

export default CarousselItem;
