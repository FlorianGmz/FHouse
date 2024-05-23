import styled, { RuleSet, css } from "styled-components";

const pages: RuleSet<object> = {
  process: css`
    width: 100%;
    height: 45%;
    padding: 60px 100px;
    font-size: 1.65rem;
    font-weight: 500;
    line-height: 3rem;
    text-indent: 4rem;
    @media only screen and (max-width: 770px) {
      width: 100vw;
      padding: 20px 50px;
      font-size: 1.1rem;
      line-height: 2rem;
      text-indent: 2rem;
    }
  `,
};
const StyledText = styled.p<{ page?: string }>`
  ${(props) => pages[props?.page]}
`;

export default StyledText;
