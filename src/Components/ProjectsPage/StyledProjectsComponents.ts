import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 400px 100px 100px;
  @media only screen and (max-width: 770px) {
    margin: 300px 50px 50px;
  }
`;
