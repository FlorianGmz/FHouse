import { ProjectState, ProjectsState } from "../../@types/types";
import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  MainSection,
  ProjectDetails,
  ProjectTitle,
  StyledText,
} from "./StyledProjectComponents";
import StyledHeader from "../../ui/StyledHeader";
import StyledImg from "../../ui/StyledImg";
import NavBar from "../NavBar";
import Caroussel from "../Carousel/Carousel";

const Project = () => {
  const projects = useLoaderData() as ProjectsState;
  const { id } = useParams<{ id: string }>();
  const [currentProject, setCurrentProject] = useState<ProjectState["project"]>(
    {
      id: 0,
      name: "",
      city: "",
      surface: 0,
      description: "",
      image: "",
    }
  );

  useEffect(() => {
    const foundProject = projects.items.find(
      (project) => Number(project.id) === Number(id)
    );
    if (foundProject) {
      setCurrentProject(foundProject);
    }
  }, [projects, id]);

  const { name, city, surface, description, image } = currentProject;
  return (
    <>
      <StyledHeader page="project" data-aos="fade-up" data-aos-duration="1000">
        <ProjectTitle>{name}</ProjectTitle>
        <ProjectDetails>
          <span>{city}</span>
          <span> | </span>
          <span>{surface} sq. ft.</span>
        </ProjectDetails>
      </StyledHeader>
      <MainSection data-aos="fade-up" data-aos-duration="1000">
        <StyledImg page="project" src={image} />
        <StyledText>{description}</StyledText>
        <NavBar position="bottom" data-aos="fade" data-aos-duration="1000">
          Back to Projects
        </NavBar>
      </MainSection>
      <Caroussel items={projects.items} />
    </>
  );
};

export default Project;
