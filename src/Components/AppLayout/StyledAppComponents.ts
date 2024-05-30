import styled from "styled-components";

export const StyledMainContainer = styled.main`
  position: relative;
  z-index: 2;
  background-color: white;
  overflow: hidden;
  margin-bottom: 560px;
  display: inline-block;
  width: 100vw;
  @media only screen and (max-width: 770px) {
    margin-bottom: 468px;
  }
  &.contact-page {
    background-color: black;
    color: white;
    @media only screen and (max-width: 770px) {
      margin-bottom: 150px;
    }
  }
`;
