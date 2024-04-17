import styled, { css } from "styled-components";

const pages = {
  slideshow: css`
    width: 80vw;
    height: 90vh;
    object-fit: cover;
    object-position: center;
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

const StyledImg = styled.img`
  ${(props) => pages[props.page]}
`;

export default StyledImg;
