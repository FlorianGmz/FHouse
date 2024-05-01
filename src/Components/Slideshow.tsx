import React from "react";
import { Fade } from "react-slideshow-image";
import styled from "styled-components";
import StyledImg from "../ui/StyledImg";

const SlideDiv = styled.div`
  width: 80vw;
  height: 90vh;
  float: right;
  /* background-color: transparent; */
  position: relative;
  overflow: hidden;
`;

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
    <div>
      <Fade {...slideProperties}>
        {slideshow.map((slide, index) => (
          <SlideDiv key={index}>
            <StyledImg key={slide} page="slideshow" src={slide} />
          </SlideDiv>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;
