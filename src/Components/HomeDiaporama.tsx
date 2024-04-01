import styled from "styled-components";
import data from "../../data/data.json";

const StyledImg = styled.img`
  padding: 15rem;
`;

const HomeDiaporama = () => {
  return (
    <div>
      <StyledImg src={data.projects[0].image} alt="" />
    </div>
  );
};

export default HomeDiaporama;
