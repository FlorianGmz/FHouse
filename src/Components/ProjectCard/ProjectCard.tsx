import { ProjectState } from "../../@types/types";
import {
  CardContainer,
  CardFrame,
  CardImg,
  CardName,
  StyledUnderline,
} from "./StyledCardComponents";

interface ProjectCardProps {
  project: ProjectState["project"];
  className: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  const { image, name, id } = project;

  return (
    <CardContainer to={`/projects/${id}`} className={className}>
      <CardImg src={image} alt="home" />
      <CardFrame>
        <CardName>{name}</CardName>
        <StyledUnderline />
      </CardFrame>
    </CardContainer>
  );
};

export default ProjectCard;
