import styled from "styled-components";

const StyledIntroductionText = styled.div`
  padding: 13rem 5rem 1.2rem;
  text-align: left;
  font-weight: 800;
  font-size: x-large;
  /* line-height: 1rem; */
  letter-spacing: 0.2rem;
`;
const IntroductionText = ({ text }) => {
  return <StyledIntroductionText>{text}</StyledIntroductionText>;
};

export default IntroductionText;
