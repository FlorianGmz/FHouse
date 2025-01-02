import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 100px;
  padding: 250px 20vw;
  @media only screen and (max-width: 770px) {
    padding: 25px;
    gap: 30px;
  }
`;

export const StyledText = styled.h4`
  &.first {
    font-size: 3.4rem;
    font-weight: 500;
    width: 45vw;
    @media only screen and (max-width: 770px) {
      width: 100%;
      font-size: 1.5rem;
      line-height: 2.2rem;
    }
  }
  &.second {
    font-size: 1.8rem;
    font-weight: 500;
    align-self: flex-end;
    line-height: 2.5rem;
    margin-left: 15rem;
    @media only screen and (max-width: 770px) {
      width: 100%;
      font-size: 1.1rem;
      line-height: 2rem;
    }
  }
  &.third {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 2.5rem;
    padding: 200px 20vw;
    margin-left: 15rem;
    @media only screen and (max-width: 770px) {
      width: 100%;
      margin-left: 0;
      padding: 25px 25px 0 25px;
      font-size: 1.1rem;
      line-height: 2rem;
    }
  }
  &.conclusion {
    width: 50vw;
    font-weight: 500;
    text-align: center;
    margin: 0 auto;
    padding-bottom: 200px;
    font-size: 3.3rem;
    @media only screen and (max-width: 770px) {
      width: 100%;
      font-size: 1.7rem;
      text-align: left;
      font-weight: 500;
      line-height: 2.2rem;
      padding: 60px 25px 60px;
    }
  }
`;
