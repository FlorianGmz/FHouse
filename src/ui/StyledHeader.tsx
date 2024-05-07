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
};

const StyledHeader = styled.div<{ page?: string }>`
  ${(props) => pages[props.page]}
`;

export default StyledHeader;
