import { ProjectState, ProjectsState } from "../../@types/types";
import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  MainSection,
  ProjectDetails,
  ProjectTitle,
  StyledText,
} from "./StyledProjectComponents";
import StyledHeaderDiv from "../../ui/StyledHeader";
import StyledImg from "../../ui/StyledImg";
import NavBar from "../NavBar/NavBar";
import Caroussel from "../Carousel/Carousel";

const Project = () => {
  const projects = useLoaderData() as ProjectsState;
  const param = useParams<{ name: string }>();
  const paramProject = param.name;

  const [currentProject, setCurrentProject] = useState<ProjectState["project"]>(
    {
      id: 0,
      name: "",
      city: "",
      floorSpace: 0,
      description: "",
      image: "",
      introduction: { text: "" },
    }
  );

  useEffect(() => {
    const foundProject = projects.find(
      (project) => project.name === paramProject
    );
    if (foundProject) {
      setCurrentProject(foundProject);
    }
  }, [projects, paramProject]);

  const { name, city, floorSpace, description, image } = currentProject;

  return (
    <>
      <StyledHeaderDiv
        $page="project"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <ProjectTitle>{name}</ProjectTitle>
        <ProjectDetails>
          <span>{city}</span>
          <span> | </span>
          <span>{floorSpace} sq. ft.</span>
        </ProjectDetails>
      </StyledHeaderDiv>
      <MainSection data-aos="fade-up" data-aos-duration="1000">
        <StyledImg $page="project" src={image} />
        <StyledText>{description}</StyledText>
        <NavBar position="bottom" data-aos="fade" data-aos-duration="1000">
          Back to Projects
        </NavBar>
      </MainSection>
      <Caroussel projects={projects} />
    </>
  );
};

export default Project;
