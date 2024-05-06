import styled, { css } from "styled-components";

const pages = {
  home: css`
    padding: 400px 100px 50px;
    text-align: left;
    font-weight: 400;
    font-size: 4rem;
  `,
  process: css`
    width: 60vw;
    height: 95vh;
    padding-left: 100px;
    padding-top: 45vh;
    font-weight: 500;
    font-size: 4.75rem;
  `,
  about: css`
    width: 50vw;
    padding: 500px 90px 490px;
    font-size: 6rem;
  `,
  contact: css`
    width: 50vw;
    padding: 350px 90px 10px;
    font-size: 7rem;
  `,
};

const IntroductionText = styled.h2<{ page?: string }>`
  ${(props) => pages[props?.page]}
`;

export default IntroductionText;
