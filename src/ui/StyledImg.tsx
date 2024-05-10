import styled, { css } from "styled-components";
import { keyframes } from "styled-components";

const translateAnimation = keyframes` 
from {
    transform: translateX(0); 
  }
to {
    transform: translateX(-50px); 
  }`;

const pages = {
  slideshow: css`
    width: 120%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    /* animation: ${translateAnimation} 5.5s linear infinite; */
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
    margin-bottom: 1rem;
  `,
  contact: css`
    background-color: black;
    width: 80vw;
    height: 100vh;
    float: right;
  `,
  project: css`
    padding: 0 100px;
    width: 100%;
    height: 60vh;
    float: right;
    object-fit: cover;
    object-position: center;
  `,
};

const StyledImg = styled.img<{ page?: string }>`
  ${(props) => pages[props.page]}
`;

export default StyledImg;
