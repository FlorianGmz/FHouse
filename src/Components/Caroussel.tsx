import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { projectsState } from "../@types/types";
import ProjectCard from "./ProjectCard";

const CarousselContainer = styled.div`
  padding: 0 0 0 100px;
  overflow: visible;
`;

const CarousselTitle = styled.h4`
  font-size: 2rem;
  font-weight: 400;
  padding-bottom: 5rem;
`;
interface CarousselProps {
  items: projectsState["items"];
}

const Caroussel = ({ items }: CarousselProps) => {
  const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: true,
  };

  return (
    <CarousselContainer data-aos="fade-left" data-aos-duration="1000">
      <CarousselTitle>Select Projects</CarousselTitle>
      <Slider {...settings}>
        {items.map((project) => (
          <ProjectCard key={project.id} project={project} element="carousel" />
        ))}
      </Slider>
    </CarousselContainer>
  );
};

export default Caroussel;
