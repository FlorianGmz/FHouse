import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../data/data.json";
import CarousselItem from "./CarousselItem";
import styled from "styled-components";
import { projectsState } from "../@types/types";

const CarousselContainer = styled.div`
  padding: 0 9rem;
`;

const CarousselTitle = styled.h4`
  font-size: x-large;
`;

const Caroussel: React.FC<projectsState> = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <CarousselContainer>
      <CarousselTitle>Select Projects</CarousselTitle>
      <Slider {...settings}>
        {items.map((project) => (
          <CarousselItem project={project} />
        ))}
      </Slider>
    </CarousselContainer>
  );
};

export default Caroussel;
