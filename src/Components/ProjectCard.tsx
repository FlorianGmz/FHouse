import styled from "styled-components";
import { projectState } from "../@types/types";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 80rem;
  width: 40rem;
`;

const ProjectCard: React.FC<projectState> = ({ project }) => {
  const { image, name } = project;
  return (
    <StyledCard>
      <img src={image} alt="home" />
      <p>{name}</p>
    </StyledCard>
  );
};

export default ProjectCard;
