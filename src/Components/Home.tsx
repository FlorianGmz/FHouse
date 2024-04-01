import HomeDiaporama from "./HomeDiaporama";
import IntroductionText from "./IntroductionText";
import data from "../../data/data.json";
import NavBar from "./NavBar";
import HomeText from "./HomeText";

const Home = () => {
  const homeIntroduction = data.pageTitle.home;

  return (
    <div>
      <IntroductionText text={homeIntroduction} />
      <NavBar />
      <HomeDiaporama />
      <HomeText />
      <h4>Select Projects</h4>
      <h1>CAROUSSEL</h1>
      <NavBar />
    </div>
  );
};

export default Home;
