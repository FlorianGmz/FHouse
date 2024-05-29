import { HomeDataState } from "../../@types/types";
import { useLoaderData } from "react-router-dom";
import { StyledTitle, StyledText } from "./StyledComponents";
import Slideshow from "../Slideshow";
import Caroussel from "../Carousel/Carousel";
import NavBar from "../NavBar";
import IntroductionText from "../../ui/IntroductionText";
import StyledHeader from "../../ui/StyledHeader";

const Home = () => {
  const data = useLoaderData() as HomeDataState;
  const { introduction, firstText, secondText, slideshow } = data.homeData;
  const projects = data.projectsData.items;
  return (
    <>
      <StyledHeader page="home" data-aos="fade-up" data-aos-duration="1000">
        <IntroductionText page="home">
          <pre>{introduction}</pre>
        </IntroductionText>
        <NavBar position="top">Projects</NavBar>
      </StyledHeader>
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
