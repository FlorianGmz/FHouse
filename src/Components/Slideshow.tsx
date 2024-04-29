import React from "react";
import { Fade } from "react-slideshow-image";
import styled from "styled-components";
import StyledImg from "../ui/StyledImg";

const SlideDiv = styled.div`
  width: 80vw;
  height: 90vh;
  float: right;
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
    transitionDuration: 1000,
    arrows: false,
    infinite: true,
    easing: "ease",
  };

  return (
    <div>
      <Fade {...slideProperties}>
        {slideshow.map((slide) => (
          <SlideDiv>
            <StyledImg key={slide} page="slideshow" src={slide} />
          </SlideDiv>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;
