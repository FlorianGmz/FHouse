import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import Home from "./Components/Home";
import GlobalStyles from "./styles/GlobalStyles";
import Projects from "./Components/Projects";
import Project from "./Components/Project";
import Process from "./Components/Process";
import About from "./Components/AboutPage/About";
import Contact from "./Components/ContactPage/Contact";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<Project />} />
          <Route path="process" element={<Process />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
