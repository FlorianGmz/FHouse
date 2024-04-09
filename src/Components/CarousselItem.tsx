import React from "react";
import { projectState } from "../@types/types";
import styled from "styled-components";

const ItemDiv = styled.div`
  width: 30rem;
  height: 60rem;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover; /* Étirer l'image pour remplir le conteneur tout en préservant les proportions */
  object-position: center;
`;

const CarousselItem: React.FC<projectState> = ({ project }) => {
  const { image, name } = project;
  return (
    <ItemDiv>
      <StyledImg src={image} />
      <p>{name}</p>
    </ItemDiv>
  );
};

export default CarousselItem;
