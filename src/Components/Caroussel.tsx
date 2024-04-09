import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../data/data.json";
import CarousselItem from "./CarousselItem";

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
    <Slider {...settings}>
      {projects.map((project) => (
        <CarousselItem project={project} />
      ))}
    </Slider>
  );
};

export default Caroussel;
