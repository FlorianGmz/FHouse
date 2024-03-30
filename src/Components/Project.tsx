import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../data/data.json";
import { projectState } from "../@types/types";

const Project = () => {
  const { id } = useParams<{ id: string }>();
  const allProjects = data.projects;
  const [currentProject, setCurrentProject] = useState<projectState["project"]>(
    {
      id: 0,
      name: "",
      localisation: "",
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

  const { name, localisation, surface, description, image } = currentProject;
  return <div>Project</div>;
};

export default Project;
