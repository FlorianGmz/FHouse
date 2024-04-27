import styled from "styled-components";

const StyledIntroductionText = styled.h2`
  color: black;
  padding: 30rem 100px 50px;
  text-align: left;
  font-weight: 400;
  font-size: 4.5rem;
`;

interface IntroductionTextProps {
  text: string;
}

const IntroductionText: React.FC<IntroductionTextProps> = ({ text }) => {
  return (
    <StyledIntroductionText>
      <pre>{text}</pre>
    </StyledIntroductionText>
  );
};

export default IntroductionText;
