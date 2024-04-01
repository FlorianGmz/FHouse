import styled from "styled-components";
import data from "../../data/data.json";
import IntroductionText from "./IntroductionText";
import ProjectCard from "./ProjectCard";

const StyledProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  padding: 10rem 5rem;
`;

const Projects = () => {
  const { projects, pageTitle } = data;
  const projectTitle = pageTitle.projects;

  return (
    <>
      <IntroductionText text={projectTitle} />
      <StyledProjectsContainer>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </StyledProjectsContainer>
    </>
  );
};

export default Projects;
