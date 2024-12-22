import { AboutState } from "../../@types/types";
import "react-slideshow-image/dist/styles.css";
import { useLoaderData } from "react-router-dom";
import IntroductionText from "../../ui/IntroductionText";
import StyledImg from "../../ui/StyledImg";
import { StyledDiv, StyledText } from "./StyledAboutComponents";

const About = () => {
  const aboutData = useLoaderData() as AboutState[];
  const { image_1, image_2, image_3, text_1, text_2, text_3, text_4, text_5 } =
    aboutData[0];

  return (
    <div data-aos-once="true">
      <section>
        <IntroductionText
          data-aos="fade-up"
          data-aos-duration="1000"
          $page="about"
        >
          <p>{text_1}</p>
        </IntroductionText>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="350"
          data-aos-offset="-500"
        >
          <StyledImg $page="about" src={image_1} alt="terrace on the beach" />
        </div>
      </section>
      <section>
        <StyledDiv data-aos="fade-up" data-aos-duration="1000">
          <StyledText className="first">{text_2}</StyledText>
          <StyledText className="second">{text_3}</StyledText>
        </StyledDiv>
        <div data-aos="fade-up" data-aos-duration="1000">
          <StyledImg $page="aboutMain" src={image_2} alt="architect house" />
        </div>
      </section>
      <section>
        <StyledText
          data-aos="fade-up"
          data-aos-duration="1000"
          className="third"
        >
          {text_4}
        </StyledText>
        <StyledText
          data-aos="fade-up"
          data-aos-duration="1000"
          className="conclusion"
        >
          {text_5}
        </StyledText>
        <div data-aos="fade-up" data-aos-duration="1000">
          <StyledImg
            $page="aboutFinal"
            src={image_3}
            alt="a group of people smiling"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
