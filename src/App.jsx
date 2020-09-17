import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { Route } from "react-router-dom";
import Header from "./components/header";
import "./styles/App.scss";

import Home from "./pages/home";
import About from "./pages/about";
import CaseStudies from "./pages/case-studies";
import Contact from "./pages/contact";
import Navigation from "./components/navigation";

const routes = [
  { route: "/", name: "Home", Component: Home },
  { route: "/about-us", name: "About Us", Component: About },
  { route: "/case-studies", name: "Case Studies", Component: CaseStudies },
  { route: "/contact", name: "Contact", Component: Contact },
];

function debounce(fun, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fun.apply(this, arguments);
    }, ms);
  };
}

function App() {
  const [dimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    let vh = dimension.height * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    gsap.to("body", { css: { visibility: "visible" } });

    const debouncedHandleResize = debounce(function handleResize() {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, [dimension]);

  return (
    <>
      <Header dimension={dimension} />
      <div className="App">
        {routes.map(({ route, Component }) => {
          return (
            <Route key={route} path={route} exact>
              <Component dimension={dimension} />
            </Route>
          );
        })}
      </div>
      <Navigation />
    </>
  );
}

export default App;
