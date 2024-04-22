import styled from "styled-components";
import { textState } from "../@types/types";

const StyledIntroductionText = styled.h2`
  padding: 30rem 9rem 0rem;
  text-align: left;
  font-weight: 800;
  font-size: 8rem;
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
