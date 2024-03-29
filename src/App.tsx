import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import Home from "./Components/Home";
import GlobalStyles from "./styles/GlobalStyles";

export const IntroductionMessage = (
  <p>
    Classy,
    <br />
    modern
    <br />
    conscious homes.
  </p>
);
export const ProjectsMessage = (
  <p>
    At home,
    <br />
    with
    <br />
    nature.
  </p>
);

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="projects" element={<Projects />} /> */}
          {/* <Route path="models" element={<Models />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
