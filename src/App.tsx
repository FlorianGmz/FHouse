import { HashRouter, Route, Routes } from "react-router-dom";
import "aos/dist/aos.css";

import AppLayout from "./Components/AppLayout/AppLayout";
import Home from "./Components/HomePage/Home";
import GlobalStyles from "./styles/GlobalStyles";
import Projects from "./Components/ProjectsPage/Projects";
import Project from "./Components/ProjectPage/Project";
import Process from "./Components/ProcessPage/Process";
import About from "./Components/AboutPage/About";
import Contact from "./Components/ContactPage/Contact";

function App() {
  // We define an HashRouter to be able to host a SPA application with GitHub pages
  return (
    <>
      <GlobalStyles />
      <HashRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<Project />} />
            <Route path="/process" element={<Process />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AppLayout>
      </HashRouter>
    </>
  );
}

export default App;
