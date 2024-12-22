import { HomeDataState } from "../../@types/types";
import { useLoaderData } from "react-router-dom";
import { StyledTitle, StyledText } from "./StyledHomeComponents";
import Slideshow from "../Slideshow/Slideshow";
import Caroussel from "../Carousel/Carousel";
import NavBar from "../NavBar/NavBar";
import IntroductionText from "../../ui/IntroductionText";
import StyledHeaderDiv from "../../ui/StyledHeader";

const Home = () => {
  const data = useLoaderData() as HomeDataState;
  const { introduction, mainText, conclusion, slideshow } = data.homeData[0];
  const projects = data.projectsData;

  return (
    <>
      <StyledHeaderDiv $page="home" data-aos="fade-up" data-aos-duration="1000">
        <IntroductionText $page="home">
          <p>{introduction}</p>
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
        <StyledTitle>{mainText}</StyledTitle>
        <StyledText>{conclusion}</StyledText>
      </div>
      <Caroussel projects={projects} />
      <NavBar position="bottom">Projects</NavBar>
    </>
  );
};

export default Home;
