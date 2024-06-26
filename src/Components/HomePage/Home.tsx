import { StyledTitle, StyledText } from "./StyledHomeComponents";
import Slideshow from "../Slideshow/Slideshow";
import Caroussel from "../Carousel/Carousel";
import NavBar from "../NavBar/NavBar";
import IntroductionText from "../../ui/IntroductionText";
import StyledHeaderDiv from "../../ui/StyledHeader";
import data from "../../../data/data.json";

const Home = () => {
  const { introduction, firstText, secondText, slideshow } = data.home;
  const projects = data.projects.items;
  return (
    <>
      <StyledHeaderDiv $page="home" data-aos="fade-up" data-aos-duration="1000">
        <IntroductionText $page="home">
          <pre>{introduction}</pre>
        </IntroductionText>
        <NavBar position="top">Projects</NavBar>
      </StyledHeaderDiv>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="350"
        data-aos-offset="-500"
      >
        <Slideshow slideshow={slideshow} />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <StyledTitle>{firstText}</StyledTitle>
        <StyledText>{secondText}</StyledText>
      </div>
      <Caroussel items={projects} />
      <NavBar position="bottom">Projects</NavBar>
    </>
  );
};

export default Home;
