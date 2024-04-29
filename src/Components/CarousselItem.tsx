import React from "react";
import { projectState } from "../@types/types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ImgDiv = styled(Link)`
  position: relative;
  overflow: hidden;
  width: 20rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledImg = styled.img`
  width: 120%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s ease;
  ${ImgDiv}:hover & {
    transform: translateX(-50px);
  }
`;

const ItemTitle = styled.p`
  padding: 2rem 0 4rem;
  font-weight: 500;
  font-size: 1.5rem;
`;

const CarousselItem: React.FC<projectState> = ({ project }) => {
  const { image, name, id } = project;
  return (
    <>
      <ImgDiv to={`projects/${id}`}>
        <StyledImg src={image} />
      </ImgDiv>
      <ItemTitle>{name}</ItemTitle>
    </>
  );
};

export default CarousselItem;
