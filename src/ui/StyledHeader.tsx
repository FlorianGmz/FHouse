import styled, { css } from "styled-components";

const pages = {
  home: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    height: 90vh;
    @media only screen and (max-width: 770px) {
      height: 70vh;
    }
  `,
  projects: css`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 55vh;
  `,
  project: css`
    padding-left: 100px;
    gap: 2rem;
    height: 85vh;
    @media only screen and (max-width: 770px) {
      padding-left: 25px;
      gap: 0.5rem;
      height: 80vh;
    }
  `,
};

const StyledHeaderDiv = styled.div<{ $page?: string }>`
  ${(props) => pages[props.$page as keyof typeof pages]}
`;

export default StyledHeaderDiv;
