import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../data/data.json";
import CarousselItem from "./CarousselItem";
import styled from "styled-components";

const CarousselContainer = styled.div`
  padding: 0 9rem;
`;

const CarousselTitle = styled.h4`
  font-size: x-large;
`;

const Caroussel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const projects = data.projects;

  return (
    <CarousselContainer>
      <CarousselTitle>Select Projects</CarousselTitle>
      <Slider {...settings}>
        {projects.map((project) => (
          <CarousselItem project={project} />
        ))}
      </Slider>
    </CarousselContainer>
  );
};

export default Caroussel;
