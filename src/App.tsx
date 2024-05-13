import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import AppLayout from "./Components/AppLayout";
import Home from "./Components/Home";
import GlobalStyles from "./styles/GlobalStyles";
import Projects from "./Components/Projects";
import Project from "./Components/Project";
import Process from "./Components/Process";
import About from "./Components/AboutPage/About";
import Contact from "./Components/ContactPage/Contact";

import {
  aboutLoader,
  homeLoader,
  processLoader,
  projectsLoader,
  contactLoader,
} from "./services/loaders";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "projects",
        element: <Projects />,
        loader: projectsLoader,
      },
      {
        path: "projects/:id",
        element: <Project />,
        loader: projectsLoader,
      },
      {
        path: "process",
        element: <Process />,
        loader: processLoader,
      },
      {
        path: "about",
        element: <About />,
        loader: aboutLoader,
      },
      {
        path: "contact",
        element: <Contact />,
        loader: contactLoader,
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
