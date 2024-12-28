import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { ProjectsState } from "../../@types/types";
import ProjectCard from "../ProjectCard/ProjectCard";
import {
  CarouselContainer,
  CarouselSpan,
  CarouselTitle,
  SliderDiv,
  TitleDiv,
} from "./StyledCarouselComponents";

interface CarouselProps {
  projects: ProjectsState;
}

const Carousel = ({ projects }: CarouselProps) => {
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
    <CarouselContainer data-aos="fade-left" data-aos-duration="1000">
      <TitleDiv>
        <CarouselSpan />
        <CarouselTitle>Select Projects</CarouselTitle>
      </TitleDiv>
      <SliderDiv>
        <Slider {...settings}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              className="carousel"
            />
          ))}
        </Slider>
      </SliderDiv>
    </CarouselContainer>
  );
};
export default Carousel;
