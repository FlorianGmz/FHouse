import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import Home from "./Components/Home";
import GlobalStyles from "./styles/GlobalStyles";
import Projects, { loader as projectsLoader } from "./Components/Projects";
import Project from "./Components/Project";
import Process, { loader as processLoader } from "./Components/Process";
import About, { loader as aboutLoader } from "./Components/AboutPage/About";
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
        loader: projectsLoader,
      },
      {
        path: "projects/:id",
        element: <Project />,
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
