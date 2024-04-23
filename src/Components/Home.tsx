import HomeDiaporama from "./HomeDiaporama";
import IntroductionText from "./IntroductionText";
import NavBar from "./NavBar";
import HomeText from "./HomeText";
import Caroussel from "./Caroussel";
import { getHome, getProjects } from "../services/apiFaliHouse";
import { useLoaderData } from "react-router-dom";
import { homeState } from "../@types/types";
import styled from "styled-components";

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

const Home = () => {
  const data = useLoaderData() as object;
  console.log(data);
  const { introduction, firstText, secondText, slideshow } = data.homeData;
  const projects = data.projectData;

  return (
    <div>
      <IntroductionText text={introduction} />
      <NavBar position="top" />
      <HomeDiaporama />
      <StyledTitle>{firstText}</StyledTitle>
      <StyledText>{secondText}</StyledText>
      <Caroussel items={projects} {...projects} />
      <NavBar position="bottom" />
    </div>
  );
};

export async function loader() {
  const homeData = await getHome();
  const projectData = await getProjects();
  return { homeData, projectData };
}

export default Home;
