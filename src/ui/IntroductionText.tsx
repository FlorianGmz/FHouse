import styled, { css } from "styled-components";

const pages = {
  process: css`
    width: 60vw;
    padding: 550px 90px 430px;
    font-size: 6rem;
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
  ${(props) => pages[props.page]}
`;

export default IntroductionText;
