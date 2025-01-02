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

import {
  aboutLoader,
  homeLoader,
  processLoader,
  projectsLoader,
  contactLoader,
  footerLoader,
} from "./services/loaders";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    loader: footerLoader,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "/projects",
        element: <Projects />,
        loader: projectsLoader,
      },
      {
        path: "/projects/:id",
        element: <Project />,
        loader: projectsLoader,
      },
      {
        path: "/process",
        element: <Process />,
        loader: processLoader,
      },
      {
        path: "/about",
        element: <About />,
        loader: aboutLoader,
      },
      {
        path: "/contact",
        element: <Contact />,
        loader: contactLoader,
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
