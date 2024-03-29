import styled from "styled-components";
import data from "../data/data.json";
import IntroductionText from "./IntroductionText";
import ProjectCard from "./ProjectCard";

const StyledProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  padding: 10rem 5rem;
`;

const Projects = () => {
  const { projects, textIntro } = data;
  return (
    <>
      <IntroductionText text={textIntro.projects} />
      <StyledProjectsContainer>
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </StyledProjectsContainer>
    </>
  );
};

export default Projects;
