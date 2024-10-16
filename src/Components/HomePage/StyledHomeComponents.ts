import styled from "styled-components";
export const StyledTitle = styled.h3`
  max-width: 1400px;
  padding: 13rem 20vw 3rem;
  line-height: 5rem;
  font-size: 3.5rem;
  font-weight: 500;
  @media only screen and (max-width: 770px) {
    width: auto;
    line-height: 3rem;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 100px 50px 50px;
  }
`;

export const StyledText = styled.h4`
  max-width: 1400px;
  padding: 0rem 20vw 13rem;
  line-height: 3rem;
  font-size: 1.7rem;
  font-weight: 500;
  @media only screen and (max-width: 770px) {
    width: auto;
    line-height: 2rem;
    font-size: 1.2rem;
    padding: 0 50px 100px;
  }
`;
