import styled, { css } from "styled-components";

const pages = {
  home: css`
    padding: 500px 100px 50px;
    text-align: left;
    font-weight: 500;
    font-size: 4.5rem;
    @media only screen and (max-width: 770px) {
      letter-spacing: 0.1rem;
      padding: 350px 50px 30px;
      font-size: 1.8rem;
    }
  `,
  process: css`
    width: 60vw;
    height: 90vh;
    padding: 550px 0 0 100px;
    font-weight: 500;
    font-size: 4.75rem;
    @media only screen and (max-width: 770px) {
      font-size: 1.5rem;
      height: 80vh;
      padding: 400px 0 0 50px;
    }
  `,
  projects: css`
    width: 60vw;
    padding: 500px 0 0 100px;
    font-weight: 500;
    font-size: 6.5rem;
    @media only screen and (max-width: 770px) {
      font-size: 2.8rem;
      padding-left: 50px;
      padding-top: 10vh;
    }
  `,
  about: css`
    width: 60vw;
    height: 90vh;
    padding-top: 40vh;
    padding-left: 100px;
    font-size: 5rem;
    font-weight: 500;
    @media only screen and (max-width: 770px) {
      font-size: 1.6rem;
      padding: 300px 50px 300px;
    }
  `,
  contact: css`
    width: 90vw;
    padding: 30vh 100px 10px;
    font-size: 6.6rem;
    font-weight: 500;
    letter-spacing: 0.2rem;
    @media only screen and (max-width: 770px) {
      width: auto;
      letter-spacing: 0.1rem;
      font-size: 2.7rem;
      padding: 300px 50px 15px;
    }
  `,
};

const IntroductionText = styled.h2<{ $page?: string }>`
  ${(props) => pages[props?.$page as keyof typeof pages]}
`;

export default IntroductionText;
