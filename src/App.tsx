import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "aos/dist/aos.css";

import AppLayout from "./Components/AppLayout/AppLayout";
import Home from "./Components/HomePage/Home";
import GlobalStyles from "./styles/GlobalStyles";
import Projects from "./Components/ProjectsPage/Projects";
import Project from "./Components/ProjectPage/Project";
import Process from "./Components/ProcessPage/Process";
import About from "./Components/AboutPage/About";
import Contact from "./Components/ContactPage/Contact";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/:id",
        element: <Project />,
      },
      {
        path: "process",
        element: <Process />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
