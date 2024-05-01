import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarousselItem from "./CarousselItem";
import styled from "styled-components";
import { projectsState } from "../@types/types";

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
    dots: true,
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
          <CarousselItem key={project.id} project={project} />
        ))}
      </Slider>
    </CarousselContainer>
  );
};

export default Caroussel;
