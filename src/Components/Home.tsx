import NavBar from "./NavBar";
import Caroussel from "./Caroussel";
import { getHome, getProjects } from "../services/apiFaliHouse";
import { useLoaderData } from "react-router-dom";
import { homeDataState } from "../@types/types";
import styled from "styled-components";
import Slideshow from "./Slideshow";
import IntroductionText from "../ui/IntroductionText";

const StyledTitle = styled.h3`
  width: 1200px;
  padding: 13rem 20vw 3rem;
  line-height: 5rem;
  font-size: 3.5rem;
  font-weight: 400;
`;

const StyledText = styled.h4`
  width: 1200px;
  padding: 0rem 20vw 13rem;
  line-height: 3rem;
  font-size: 1.5rem;
  font-weight: 400;
`;

const Home = () => {
  const data = useLoaderData() as homeDataState;
  const { introduction, firstText, secondText, slideshow } = data.homeData;
  const projects = data.projectsData.items;
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="1000">
        <IntroductionText page="home">
          <pre>{introduction}</pre>
        </IntroductionText>
        <NavBar position="top" />
      </div>
      <div
        data-aos="zoom-in-left"
        data-aos-duration="1000"
        data-aos-delay="250"
        data-aos-offset="-500"
      >
        <Slideshow slideshow={slideshow} />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <StyledTitle>{firstText}</StyledTitle>
        <StyledText>{secondText}</StyledText>
      </div>
      <Caroussel items={projects} />
      <NavBar position="bottom" />
    </>
  );
};

export async function loader() {
  const homeData = await getHome();
  const projectsData = await getProjects();
  return { homeData, projectsData };
}

export default Home;
