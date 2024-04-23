import styled from "styled-components";
import IntroductionText from "./IntroductionText";
import ProjectCard from "./ProjectCard";
import NavBar from "./NavBar";
import { getProjects } from "../services/apiFaliHouse";
import { useLoaderData } from "react-router-dom";
import { projectState, projectsState } from "../@types/types";

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
  const projectsData: projectsState = useLoaderData();
  const { introduction, items } = projectsData;

  return (
    <>
      <ProjectsHeader>
        <IntroductionText text={introduction} />
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
