import styled from "styled-components";

export const CarousselContainer = styled.div`
  width: 100vw;
  overflow: visible;
  /* padding: 0 100px; */
  margin-bottom: 80px;
  @media only screen and (max-width: 770px) {
    padding: 0 50px;
    margin-bottom: 0;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  margin-left: 100px;
  padding-bottom: 100px;
`;

export const CarousselSpan = styled.span`
  height: 2px;
  width: 90px;
  background-color: #8b8b8b;
`;

export const CarousselTitle = styled.h4`
  font-size: 1.65rem;
  letter-spacing: 0.1rem;
  font-weight: 500;
  @media only screen and (max-width: 770px) {
    font-size: 1.2rem;
    font-weight: 500;
    padding-bottom: 50px;
  }
`;

export const SliderDiv = styled.div`
  width: 100%;
  padding-left: 125px;
  padding-right: 115px;
`;
