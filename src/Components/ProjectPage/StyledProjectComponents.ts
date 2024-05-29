import styled from "styled-components";

export const ProjectTitle = styled.h2`
  font-size: 6rem;
  font-weight: 500;
  letter-spacing: 0.2rem;
  @media only screen and (max-width: 770px) {
    font-size: 2rem;
    letter-spacing: 0.1rem;
  }
`;

export const ProjectDetails = styled.h5`
  font-size: 1rem;
  line-height: 4rem;
  letter-spacing: 0.3rem;
`;

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledText = styled.p`
  margin: 80px 100px 200px;
  padding: 0 150px;
  font-size: 1.8rem;
  line-height: 3rem;
  @media only screen and (max-width: 770px) {
    font-size: 1rem;
    padding: 0 50px;
    line-height: 1.7rem;
    margin: 80px 0 0px;
    text-indent: 1rem;
  }
`;
