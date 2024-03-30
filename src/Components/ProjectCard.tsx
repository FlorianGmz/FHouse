import styled from "styled-components";
import { projectState } from "../@types/types";
import { Link } from "react-router-dom";

const StyledCard = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 80rem;
  width: 40rem;
`;

const ProjectCard: React.FC<projectState> = ({ project }) => {
  const { image, name, id } = project;
  return (
    <StyledCard to={`projects/${id}`}>
      <img src={image} alt="home" />
      <p>{name}</p>
    </StyledCard>
  );
};

export default ProjectCard;
