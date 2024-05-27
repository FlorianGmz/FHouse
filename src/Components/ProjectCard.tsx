import styled from "styled-components";
import { ProjectState } from "../@types/types";
import { Link } from "react-router-dom";

const CardContainer = styled(Link)`
  width: 460px;
  height: 565px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10rem;
  @media only screen and (max-width: 770px) {
    margin-bottom: 50px;
  }
  &.carousel {
    width: 22rem;
    height: 35rem;
    margin-bottom: 50px;
    @media only screen and (max-width: 770px) {
      margin-bottom: 50px;
    }
  }
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
  font-size: 1.6rem;
  font-weight: 500;
  @media only screen and (max-width: 770px) {
    font-size: 1.2rem;
    font-weight: 500;
    padding-bottom: 50px;
  }
`;

const StyledUnderline = styled.span`
  background-color: black;
  width: 0;
  height: 1px;
  border-radius: 1px;
  transition: 0.5s ease;
  ${CardContainer}:hover & {
    width: 100%;
  }
`;

interface ProjectCardProps {
  project: ProjectState["project"];
  element: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, element }) => {
  const { image, name, id } = project;
  return (
    <CardContainer to={`/projects/${id}`} className={element}>
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
