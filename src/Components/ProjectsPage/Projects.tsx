import { ProjectState, ProjectsState } from "../../@types/types";
import { useLoaderData } from "react-router-dom";

import { ProjectsContainer } from "./StyledProjectsComponents";
import ProjectCard from "../ProjectCard/ProjectCard";
import IntroductionText from "../../ui/IntroductionText";
import StyledHeaderDiv from "../../ui/StyledHeader";

const Projects = () => {
  const projectsData = useLoaderData() as ProjectsState;
  const introduction = projectsData[0].introduction.text;

  return (
    <>
      <StyledHeaderDiv
        $page="projects"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <IntroductionText $page="projects">
          <p>{introduction}</p>
        </IntroductionText>
      </StyledHeaderDiv>
      <ProjectsContainer
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        {projectsData.map((project: ProjectState["project"]) => (
          <ProjectCard
            key={project.id}
            project={project}
            className="projects"
          />
        ))}
      </ProjectsContainer>
    </>
  );
};

export default Projects;
