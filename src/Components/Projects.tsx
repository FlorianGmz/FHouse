import styled from "styled-components";
import data from "../../data/data.json";
import IntroductionText from "./IntroductionText";
import ProjectCard from "./ProjectCard";
import NavBar from "./NavBar";

const ProjectsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;
  padding: 10rem 5rem;
`;

const Projects = () => {
  const { projects, pageTitle } = data;
  const projectTitle = pageTitle.projects;

  return (
    <>
      <ProjectsHeader>
        <IntroductionText text={projectTitle} />
        <NavBar position="right" />
      </ProjectsHeader>
      <ProjectsContainer>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsContainer>
    </>
  );
};

export default Projects;
