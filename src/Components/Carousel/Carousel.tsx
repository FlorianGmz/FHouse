import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import styled from "styled-components";
import { ProjectState } from "../../@types/types";
import ProjectCard from "../ProjectCard";

const CarousselContainer = styled.div`
  width: 100vw;
  overflow: visible;
  padding: 0 100px;
  margin-bottom: 80px;
  @media only screen and (max-width: 770px) {
    padding: 0 50px;
    margin-bottom: 0;
  }
`;

const CarousselTitle = styled.h4`
  font-size: 2rem;
  font-weight: 400;
  padding-bottom: 100px;
  @media only screen and (max-width: 770px) {
    font-size: 1.2rem;
    font-weight: 500;
    padding-bottom: 50px;
  }
`;
interface CarousselProps {
  items: ProjectState["project"][];
}

const Caroussel = ({ items }: CarousselProps) => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
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
