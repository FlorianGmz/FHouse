import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { projectState, projectsState } from "../@types/types";
import styled from "styled-components";
import StyledHeader from "../ui/StyledHeader";
import StyledImg from "../ui/StyledImg";
import NavBar from "./NavBar";
import Caroussel from "./Carousel/Carousel";

const ProjectTitle = styled.h2`
  font-size: 6rem;
  font-weight: 500;
  letter-spacing: 0.2rem;
  @media only screen and (max-width: 770px) {
    font-size: 2rem;
    letter-spacing: 0.1rem;
  }
`;

const ProjectDetails = styled.h5`
  font-size: 1rem;
  line-height: 4rem;
  letter-spacing: 0.3rem;
`;

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledText = styled.p`
  margin: 80px 100px 200px;
  padding: 0 150px;
  font-size: 1.8rem;
  line-height: 3rem;
  @media only screen and (max-width: 770px) {
    font-size: 1rem;
    padding: 0 50px;
    line-height: 1.7rem;
    margin: 80px 0 0px;
    text-indent: 1rem;
  }
`;

const Project = () => {
  const projects = useLoaderData() as projectsState;
  const { id } = useParams<{ id: string }>();
  const [currentProject, setCurrentProject] = useState<projectState["project"]>(
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
