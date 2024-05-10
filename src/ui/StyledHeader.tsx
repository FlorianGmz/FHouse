import styled, { css } from "styled-components";

const pages = {
  home: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    height: 90vh;
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
        div>
  `,
};

const StyledHeader = styled.div<{ page?: string }>`
  ${(props) => pages[props.page]}
`;

export default StyledHeader;