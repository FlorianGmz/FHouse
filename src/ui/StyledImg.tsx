import styled, { css } from "styled-components";

const pages = {
  slideshow: css`
    width: 80vw;
    height: 90vh;
    object-fit: cover;
    object-position: center;
    @media only screen and (max-width: 770px) {
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: fill;
    }
  `,
  contact: css`
    width: 80vw;
    height: 100vh;
    float: right;
    object-fit: cover;
    object-position: center;
    @media only screen and (max-width: 770px) {
      float: none;
      width: 100%;
      padding-left: 25px;
    }
  `,
  project: css`
    padding: 0 100px;
    width: 100%;
    height: 60vh;
    float: right;
    object-fit: cover;
    object-position: center;
    @media only screen and (max-width: 770px) {
      padding: 0 25px;
    }
  `,
  process: css`
    width: 100%;
    height: 55%;
    object-fit: cover;
    object-position: center;
    @media only screen and (max-width: 770px) {
      width: 100vw;
      height: 40vh;
      padding: 0 25px;
    }
  `,
  about: css`
    width: 80vw;
    height: 90vh;
    float: right;
    object-fit: cover;
    object-position: center;
    @media only screen and (max-width: 770px) {
      width: 100vw;
      padding-left: 25px;
      height: 40vh;
    }
  `,
  aboutMain: css`
    width: 80vw;
    height: 80vh;
    object-fit: cover;
    object-position: center;
    @media only screen and (max-width: 770px) {
      width: 100vw;
      padding-right: 25px;
      height: 40vh;
    }
  `,
  aboutFinal: css`
    width: 100vw;
    height: 100vh;
    margin-bottom: 1rem;
    object-fit: cover;
    object-position: center;
    @media only screen and (max-width: 770px) {
      object-fit: contain;

      margin-bottom: 0;
      width: 100vw;
      height: 40vh;
    }
  `,
};

const StyledImg = styled.img<{ $page?: string }>`
  ${(props) => pages[props?.$page as keyof typeof pages]}
`;

export default StyledImg;
