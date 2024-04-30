import styled, { css } from "styled-components";
import { keyframes } from "styled-components";

const translateAnimation = keyframes` 
from {
    transform: translateX(0); 
  }
to {
    transform: translateX(50px); 
  }`;

const pages = {
  slideshow: css`
    width: 150%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    /* transition: transform 0.5s ease; */
    animation: ${translateAnimation} 5500ms linear infinite;
  `,
  aboutMain: css`
    width: 80vw;
    height: 100vh;
    object-fit: cover;
    object-position: center;
  `,
  aboutFinal: css`
    width: 100vw;
    height: 100vh;
    margin-bottom: 2rem;
  `,
  contact: css`
    background-color: black;
    width: 80vw;
    height: 100vh;
    float: right;
  `,
};

const StyledImg = styled.img<{ page?: string }>`
  ${(props?) => pages[props?.page]}
`;

export default StyledImg;
