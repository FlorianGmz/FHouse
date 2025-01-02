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
  const { image, name } = project;

  return (
    <CardContainer to={`/projects/${name.toString()}`} className={className}>
      <CardImg src={image} alt="home" />
      <CardFrame>
        <CardName>{name}</CardName>
        <StyledUnderline />
      </CardFrame>
    </CardContainer>
  );
};

export default ProjectCard;
