import styled from "styled-components";
import data from "../../data/data.json";

const StyledTitle = styled.h3`
  padding: 12rem 15rem 3rem;
  line-height: 4rem;
  letter-spacing: 0.5rem;
  font-size: x-large;
`;

const StyledText = styled.h4`
  padding: 0rem 15rem 12rem;
  line-height: 3rem;
`;

const HomeText = () => {
  const textTitle = data.homeText.intro;
  const text = data.homeText.text;
  return (
    <div>
      <StyledTitle>
        <pre>{textTitle}</pre>
      </StyledTitle>
      <StyledText>
        <pre>{text}</pre>
      </StyledText>
    </div>
  );
};

export default HomeText;
