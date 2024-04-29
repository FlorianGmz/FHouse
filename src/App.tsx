import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AppLayout from "./Components/AppLayout";
import Home, { loader as homeLoader } from "./Components/Home";
import GlobalStyles from "./styles/GlobalStyles";
import Projects, { loader as projectsLoader } from "./Components/Projects";
import Project from "./Components/Project";
import Process, { loader as processLoader } from "./Components/Process";
import About, { loader as aboutLoader } from "./Components/AboutPage/About";
import Contact, {
  loader as contactLoader,
} from "./Components/ContactPage/Contact";

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
    // <BrowserRouter>
    //   <GlobalStyles />
    //   <Routes>
    //     <Route element={<AppLayout />}>
    //       <Route index element={<Home />} />
    //       <Route path="projects" element={<Projects />} />
    //       <Route path="projects/:id" element={<Project />} />
    //       <Route path="process" element={<Process />} />
    //       <Route path="about" loader={aboutLoader} element={<About />} />
    //       <Route path="contact" element={<Contact />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
