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
      margin-left: 20vw;
      padding: 300px 0 110px 0;
      @media only screen and (max-width: 770px) {
        float: none;
        margin-left: 5px;
        padding: 200px 0 50px 25px;
        gap: 20px;
        flex-direction: column;
        align-items: flex-start;
        font-size: 0.5rem;
      }
    `}
`;
