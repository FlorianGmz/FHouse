import styled from "styled-components";

const LoadingPage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: center;
  align-items: center;
  justify-content: center;
  background-color: black;
  backdrop-filter: blur(4px);
`;

export default LoadingPage;
