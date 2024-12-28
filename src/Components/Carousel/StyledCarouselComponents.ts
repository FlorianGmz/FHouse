import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100vw;
  overflow: visible;
  margin-bottom: 80px;
  @media only screen and (max-width: 770px) {
    padding: 0 25px;
    margin-bottom: 0;
  }
`;

export const CarouselTitle = styled.h4`
  font-size: 1.65rem;
  letter-spacing: 1px;
  font-weight: 500;
  @media only screen and (max-width: 770px) {
    font-size: 1.2rem;
  }
`;
