import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../data/data.json";
import { projectState } from "../@types/types";
import styled from "styled-components";

const ProjectTitle = styled.h1`
  letter-spacing: 0.3rem;
  padding-left: 15rem;
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
    <div>
      <ProjectTitle>{name}</ProjectTitle>
    </div>
  );
};

export default Project;
