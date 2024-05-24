import styled, { RuleSet, css } from "styled-components";

interface PagesState {
  slideshow: RuleSet<object>;
  contact: RuleSet<object>;
  project: RuleSet<object>;
  process: RuleSet<object>;
  about: RuleSet<object>;
  aboutMain: RuleSet<object>;
  aboutFinal: RuleSet<object>;
}

const pages: PagesState = {
  slideshow: css`
    width: 80vw;
    height: 90vh;
    object-fit: cover;
    object-position: center;
    @media only screen and (max-width: 770px) {
      object-position: top;
      object-fit: scale-down;
    }
  `,
  contact: css`
    width: 80vw;
    height: 100vh;
    float: right;
    object-fit: cover;
    object-position: center;
  `,
  project: css`
    padding: 0 100px;
    width: 100%;
    height: 60vh;
    float: right;
    object-fit: cover;
    object-position: center;
    @media only screen and (max-width: 770px) {
      padding: 0;
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
      padding: 0 50px;
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
      padding-left: 50px;
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
      padding-right: 50px;
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
      margin-bottom: 0;
      width: 100vw;
      height: 40vh;
    }
  `,
};

const StyledImg = styled.img<{ page?: string }>`
  ${(props) => pages[props?.page]}
`;

export default StyledImg;
