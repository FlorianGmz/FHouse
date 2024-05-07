import styled from "styled-components";
import { projectState } from "../@types/types";
import { Link } from "react-router-dom";

const CardContainer = styled(Link)`
  width: 460px;
  height: 565px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 100px;
`;

const CardImg = styled.img`
  width: 120%;
  height: 80%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s ease;
  ${CardContainer}:hover & {
    transform: translateX(-50px);
  }
`;

const CardName = styled.p`
  padding-top: 3rem;
  font-size: 1.8rem;
  font-weight: 500;
`;

const StyledUnderline = styled.span`
  background-color: black;
  width: 0;
  height: 1px;
  border-radius: 1px;
  transition: 0.25s ease;
  ${CardContainer}:hover & {
    width: 100%;
  }
`;

const ProjectCard: React.FC<projectState> = ({ project }) => {
  const { image, name, id } = project;
  return (
    <CardContainer to={`/projects/${id}`}>
      <CardImg src={image} alt="home" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: "5px",
          maxWidth: "fit-content",
        }}
      >
        <CardName>{name}</CardName>
        <StyledUnderline />
      </div>
    </CardContainer>
  );
};

export default ProjectCard;
