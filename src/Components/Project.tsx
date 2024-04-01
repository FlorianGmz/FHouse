import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../../data/data.json";
import { projectState } from "../@types/types";
import styled from "styled-components";

const StyledProjectTitle = styled.div`
  padding: 15rem 0 0 5rem;
`;

const ProjectTitle = styled.h2`
  font-size: 8rem;
  letter-spacing: 0.3rem;
  line-height: 7rem;
`;

const ProjectDetails = styled.h5`
  letter-spacing: 0.5rem;
`;

const ProjectImage = styled.img`
  padding: 10rem 0;
`;

const Project = () => {
  const { id } = useParams<{ id: string }>();
  const allProjects = data.projects;
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
    const foundProject = allProjects.find(
      (project) => Number(project.id) === Number(id)
    );
    if (foundProject) {
      setCurrentProject(foundProject);
    }
  }, [allProjects, id]);

  const { name, city, surface, description, image } = currentProject;
  return (
    <>
      <StyledProjectTitle>
        <ProjectTitle>{name}</ProjectTitle>
        <ProjectDetails>
          <span>{city}</span>
          <span> | </span>
          <span>{surface} sqft</span>
        </ProjectDetails>
      </StyledProjectTitle>
      <ProjectImage src={image} />
      <p>{description}</p>
    </>
  );
};

export default Project;
