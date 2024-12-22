import React from "react";
import { Fade } from "react-slideshow-image";
import StyledImg from "../../ui/StyledImg";
import { SlideDiv } from "./StyledSlideshowComponent";

interface SlideShowProps {
  slideshow: string[];
}

const Slideshow: React.FC<SlideShowProps> = ({ slideshow }) => {
  const slideProperties = {
    duration: 5000,
    autoplay: true,
    pauseOnHover: false,
    transitionDuration: 1000,
    arrows: false,
    infinite: true,
    easing: "linear",
  };

  return (
    <Fade {...slideProperties}>
      {slideshow.map((slide, index) => (
        <SlideDiv key={index}>
          <StyledImg
            key={slide}
            $page="slideshow"
            src={slide}
            alt="architect house"
          />
        </SlideDiv>
      ))}
    </Fade>
  );
};

export default Slideshow;
