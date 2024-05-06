import styled from "styled-components";
import { projectState } from "../@types/types";
import { Link } from "react-router-dom";

const CardContainer = styled(Link)`
  width: 460px;
  height: 565px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 100px;
`;

const CardImg = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  object-position: center;
`;

const CardName = styled.p`
  padding: 3rem 0rem;
  font-size: 1.8rem;
  font-weight: 500;
`;

const ProjectCard: React.FC<projectState> = ({ project }) => {
  const { image, name, id } = project;
  return (
    <CardContainer to={`/projects/${id}`}>
      <CardImg src={image} alt="home" />
      <CardName>{name}</CardName>
    </CardContainer>
  );
};

export default ProjectCard;
