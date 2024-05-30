import styled, { css } from "styled-components";

export const StyledContact = styled.div<{ $page: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 1.2rem;
  @media only screen and (max-width: 770px) {
    align-items: flex-start;
    font-size: 0.8rem;
  }
  ${(props) =>
    props?.$page === "contact" &&
    css`
      align-items: flex-start;
    `}
`;
