import "react-slideshow-image/dist/styles.css";
import IntroductionText from "../../ui/IntroductionText";
import StyledImg from "../../ui/StyledImg";
import { StyledDiv, StyledText } from "./StyledComponents";
import { useLoaderData } from "react-router-dom";
import { AboutState } from "../../@types/types";

const About = () => {
  const {
    introduction,
    firstText,
    secondText,
    thirdText,
    conclusionText,
    firstImage,
    mainImage,
    finalImage,
  } = useLoaderData() as AboutState;

  return (
    <div data-aos-once="true">
      <section>
        <IntroductionText
          data-aos="fade-up"
          data-aos-duration="1000"
          page="about"
        >
          <pre>{introduction}</pre>
        </IntroductionText>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="350"
          data-aos-offset="-500"
        >
          <StyledImg page="about" src={firstImage} />
        </div>
      </section>
      <section>
        <StyledDiv data-aos="fade-up" data-aos-duration="1000">
          <StyledText className="first">{firstText}</StyledText>
          <StyledText className="second">{secondText}</StyledText>
        </StyledDiv>
        <div data-aos="fade-up" data-aos-duration="1000">
          <StyledImg page="aboutMain" src={mainImage} />
        </div>
      </section>
      <section>
        <StyledText
          data-aos="fade-up"
          data-aos-duration="1000"
          className="third"
        >
          {thirdText}
        </StyledText>
        <StyledText
          data-aos="fade-up"
          data-aos-duration="1000"
          className="conclusion"
        >
          {conclusionText}
        </StyledText>
        <div data-aos="fade-up" data-aos-duration="1000">
          <StyledImg page="aboutFinal" src={finalImage} />
        </div>
      </section>
    </div>
  );
};

export default About;
