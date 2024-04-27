import styled from "styled-components";
import { textState } from "../@types/types";

const StyledIntroductionText = styled.h2`
  color: black;
  padding: 30rem 100px 50px;
  text-align: left;
  font-weight: 400;
  font-size: 4.5rem;
`;
const IntroductionText: React.FC<textState> = ({ text }) => {
  return (
    <StyledIntroductionText>
      <pre>{text}</pre>
    </StyledIntroductionText>
  );
};

export default IntroductionText;
