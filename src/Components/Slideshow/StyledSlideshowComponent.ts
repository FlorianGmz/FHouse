import styled from "styled-components";

export const SlideDiv = styled.div`
  width: 80vw;
  height: 90vh;
  float: right;
  position: relative;
  @media only screen and (max-width: 770px) {
    float: left;
    padding-left: 50px;
    height: 50vh;
  }
`;
