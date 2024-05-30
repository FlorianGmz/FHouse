import styled, { css } from "styled-components";

export const Row = styled.div<{ $page: string }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 80px;
  line-height: 1.5rem;
  font-size: 1rem;
  @media only screen and (max-width: 770px) {
    gap: 30px;
    flex-direction: column;
    align-items: flex-start;
    font-size: 0.8rem;
  }
  ${(props) =>
    props?.$page === "contact" &&
    css`
      width: 80vw;
      float: right;
      font-size: 1.2rem;
      line-height: 1.8rem;
      margin-top: 300px;
      margin-bottom: 100px;
      @media only screen and (max-width: 770px) {
        float: none;
        padding-left: 50px;
        margin-top: 200px;
        margin-bottom: 50px;
        gap: 20px;
        flex-direction: column;
        align-items: flex-start;
        font-size: 0.5rem;
      }
    `}
`;
