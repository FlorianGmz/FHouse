import HomeDiaporama from "./HomeDiaporama";
import IntroductionText from "./IntroductionText";
import { IntroductionMessage } from "../App";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <div>
      <IntroductionText text={IntroductionMessage} />
      <NavBar />
      <HomeDiaporama />
    </div>
  );
};

export default Home;
