import { ProjectState, ProjectsState } from "../../@types/types";
import { useLoaderData } from "react-router-dom";

import { ProjectsContainer } from "./StyledProjectsComponents";
import ProjectCard from "../ProjectCard/ProjectCard";
import IntroductionText from "../../ui/IntroductionText";
import StyledHeader from "../../ui/StyledHeader";

const Projects = () => {
  const { introduction, items } = useLoaderData() as ProjectsState;

  return (
    <>
      <StyledHeader
        $page="projects"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <IntroductionText $page="projects">
          <pre>{introduction}</pre>
        </IntroductionText>
      </StyledHeader>
      <ProjectsContainer
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        {items.map((project: ProjectState["project"]) => (
          <ProjectCard key={project.id} project={project} element="projects" />
        ))}
      </ProjectsContainer>
    </>
  );
};

export default Projects;
