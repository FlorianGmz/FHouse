import styled from "styled-components";

export const CarousselContainer = styled.div`
  width: 100vw;
  overflow: visible;
  padding: 0 100px;
  margin-bottom: 80px;
  @media only screen and (max-width: 770px) {
    padding: 0 50px;
    margin-bottom: 0;
  }
`;

export const CarousselTitle = styled.h4`
  font-size: 2rem;
  font-weight: 400;
  padding-bottom: 100px;
  @media only screen and (max-width: 770px) {
    font-size: 1.2rem;
    font-weight: 500;
    padding-bottom: 50px;
  }
`;
