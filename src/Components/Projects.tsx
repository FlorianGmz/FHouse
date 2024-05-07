import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import NavBar from "./NavBar";
import { getProjects } from "../services/apiFaliHouse";
import { useLoaderData } from "react-router-dom";
import { projectState, projectsState } from "../@types/types";
import IntroductionText from "../ui/IntroductionText";
import StyledHeader from "../ui/StyledHeader";

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
      <StyledHeader page="projects" data-aos="fade-up" data-aos-duration="1000">
        <IntroductionText page="projects">
          <pre>{introduction}</pre>
        </IntroductionText>
        <NavBar position="right" />
      </StyledHeader>
      <ProjectsContainer data-aos="fade" data-aos-duration="1000">
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
