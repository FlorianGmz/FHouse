import styled from "styled-components";

export const ProcessTableContent = styled.section`
  padding: 0 100px;
  position: absolute;
  top: 90vh;
  &.fixed {
    position: fixed;
    top: 10vh;
  }
`;
export const ProcessTableItem = styled.div`
  text-transform: capitalize;
  opacity: 0.2;
  font-size: large;
  font-weight: 600;
  line-height: 2rem;
  cursor: pointer;
  transition: 0.5s;
  @media only screen and (max-width: 770px) {
    display: none;
  }
  &.current {
    opacity: 1;
  }
`;

export const ProcessItemSection = styled.section`
  top: 95vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: auto;
  padding-right: 100px;
  z-index: 50;
  @media only screen and (max-width: 770px) {
    display: block;
  }
`;

export const ProcessItem = styled.div`
  width: 70vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const ProcessText = styled.div`
  width: 100%;
  height: 45%;
  padding: 60px 100px;
  font-size: 1.65rem;
  font-weight: 400;
  line-height: 3rem;
  text-indent: 4rem;
  @media only screen and (max-width: 770px) {
    width: 100vw;
    padding: 30px 50px;
    font-size: 1.1rem;
    line-height: 2rem;
    text-indent: 2rem;
  }
`;
