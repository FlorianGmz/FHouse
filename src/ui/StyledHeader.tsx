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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    height: 80vh;
    @media only screen and (max-width: 770px) {
      padding-left: 50px;
      gap: 0.5rem;
      height: 60vh;
    }
  `,
};

const StyledHeader = styled.div<{ page?: string }>`
  ${(props) => pages[props.page]}
`;

export default StyledHeader;
