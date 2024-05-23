import styled, { RuleSet, css } from "styled-components";

const pages: RuleSet<object> = {
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
  aboutMain: css`
    width: 80vw;
    height: 80vh;
    object-fit: cover;
    object-position: center;
  `,
  aboutFinal: css`
    width: 100vw;
    height: 100vh;
    margin-bottom: 1rem;
    object-fit: cover;
    object-position: center;
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
  about: css`
    width: 80vw;
    height: 90vh;
    float: right;
    object-fit: cover;
    object-position: center;
  `,
};

const StyledImg = styled.img<{ page?: string }>`
  ${(props) => pages[props?.page]}
`;

export default StyledImg;
