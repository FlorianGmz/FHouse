import styled, { css } from "styled-components";

const pages = {
  home: css`
    padding: 400px 100px 50px;
    text-align: left;
    font-weight: 500;
    font-size: 4.5rem;
    @media only screen and (max-width: 600px) {
      letter-spacing: 0.1rem;
      padding: 350px 50px 30px;
      font-size: 1.6rem;
    }
  `,
  process: css`
    width: 60vw;
    height: 90vh;
    padding-left: 100px;
    padding-top: 45vh;
    font-weight: 500;
    font-size: 4.75rem;
  `,
  projects: css`
    width: 60vw;
    padding-left: 100px;
    padding-top: 35vh;
    font-weight: 500;
    font-size: 6.5rem;
  `,
  about: css`
    width: 60vw;
    padding: 500px 100px;
    font-size: 5rem;
    font-weight: 500;
  `,
  contact: css`
    width: 50vw;
    padding: 350px 100px 10px;
    font-size: 6.6rem;
    font-weight: 500;
    letter-spacing: 0.2rem;
  `,
};

const IntroductionText = styled.h2<{ page?: string }>`
  ${(props) => pages[props?.page]}
`;

export default IntroductionText;
