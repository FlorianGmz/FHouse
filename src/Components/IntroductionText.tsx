import styled from "styled-components";
import { textState } from "../@types/types";

const StyledIntroductionText = styled.div`
  padding: 13rem 5rem 1.2rem;
  text-align: left;
  font-weight: 800;
  font-size: x-large;
  /* line-height: 1rem; */
  letter-spacing: 0.2rem;
`;
const IntroductionText: React.FC<textState> = ({ text }) => {
  return (
    <StyledIntroductionText>
      <pre>{text}</pre>
    </StyledIntroductionText>
  );
};

export default IntroductionText;
