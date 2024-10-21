import styled from "styled-components";

export const CarousselContainer = styled.div`
  width: 100vw;
  overflow: visible;
  margin-bottom: 80px;
  @media only screen and (max-width: 770px) {
    padding: 0 25px;
    margin-bottom: 0;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  margin-left: 100px;
  padding-bottom: 100px;
  @media only screen and (max-width: 770px) {
    gap: 15px;
    margin: 0;
    width: 100vw;
    height: 100px;
    padding: 0;
    margin-bottom: 20px;
  }
`;

export const CarousselSpan = styled.span`
  height: 2px;
  width: 90px;
  background-color: #8b8b8b;
  @media only screen and (max-width: 770px) {
    width: 40px;
    margin-bottom: 0;
  }
`;

export const CarousselTitle = styled.h4`
  font-size: 1.65rem;
  letter-spacing: 1px;
  font-weight: 500;
  @media only screen and (max-width: 770px) {
    font-size: 1.2rem;
  }
`;

export const SliderDiv = styled.div`
  width: 100%;
  padding-left: 125px;
  padding-right: 115px;
  @media only screen and (max-width: 770px) {
    padding: 0 25px;
  }
`;
