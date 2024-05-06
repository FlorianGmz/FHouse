import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import NavBar from "./NavBar";
import { getProjects } from "../services/apiFaliHouse";
import { useLoaderData } from "react-router-dom";
import { projectState, projectsState } from "../@types/types";
import IntroductionText from "../ui/IntroductionText";

const ProjectsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 55vh;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 300px 100px;
`;

const Projects = () => {
  const { introduction, items } = useLoaderData() as projectsState;

  return (
    <>
      <ProjectsHeader>
        <IntroductionText page="projects">
          <pre>{introduction}</pre>
        </IntroductionText>
        <NavBar position="right" />
      </ProjectsHeader>
      <ProjectsContainer>
        {items.map((project: projectState["project"]) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsContainer>
    </>
  );
};

export async function loader() {
  const projectsData = await getProjects();
  return projectsData;
}

export default Projects;
