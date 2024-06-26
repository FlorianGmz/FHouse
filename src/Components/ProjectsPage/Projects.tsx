import { ProjectState, ProjectsState } from "../../@types/types";

import { ProjectsContainer } from "./StyledProjectsComponents";
import ProjectCard from "../ProjectCard/ProjectCard";
import IntroductionText from "../../ui/IntroductionText";
import StyledHeaderDiv from "../../ui/StyledHeader";

import data from "../../../public/data/data.json";

const Projects = () => {
  const { introduction, items } = data.projects as ProjectsState;

  return (
    <>
      <StyledHeaderDiv
        $page="projects"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <IntroductionText $page="projects">
          <pre>{introduction}</pre>
        </IntroductionText>
      </StyledHeaderDiv>
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
