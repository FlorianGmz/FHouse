import { ProjectState } from "../../@types/types";
import {
  CardContainer,
  CardImg,
  CardName,
  StyledUnderline,
} from "./StyledCardComponents";

interface ProjectCardProps {
  project: ProjectState["project"];
  element: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, element }) => {
  const { image, name, id } = project;
  return (
    <CardContainer to={`/projects/${id}`} className={element}>
      <CardImg src={image} alt="home" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: "5px",
          maxWidth: "fit-content",
        }}
      >
        <CardName>{name}</CardName>
        <StyledUnderline />
      </div>
    </CardContainer>
  );
};

export default ProjectCard;
