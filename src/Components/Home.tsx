import HomeDiaporama from "./HomeDiaporama";
import IntroductionText from "./IntroductionText";
import data from "../data/data.json";
import NavBar from "./NavBar";

const Home = () => {
  const homeIntroduction = data.textIntro.home;

  return (
    <div>
      <IntroductionText text={homeIntroduction} />
      <NavBar />
      <HomeDiaporama />
    </div>
  );
};

export default Home;
