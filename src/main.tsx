import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
  disable: false,
  startEvent: "load",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  delay: 0,
  easing: "ease-in-out-quad",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
