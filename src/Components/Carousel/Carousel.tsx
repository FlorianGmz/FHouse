import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { ProjectState } from "../../@types/types";
import ProjectCard from "../ProjectCard/ProjectCard";
import {
  CarousselContainer,
  CarousselSpan,
  CarousselTitle,
  SliderDiv,
  TitleDiv,
} from "./StyledCarouselComponents";

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
      <TitleDiv>
        <CarousselSpan />
        <CarousselTitle>Select Projects</CarousselTitle>
      </TitleDiv>
      <SliderDiv>
        <Slider {...settings}>
          {items.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              element="carousel"
            />
          ))}
        </Slider>
      </SliderDiv>
    </CarousselContainer>
  );
};

export default Caroussel;
