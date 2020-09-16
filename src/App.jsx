import React, { useEffect } from "react";
import gsap from "gsap";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header";
import "./styles/App.scss";
import Home from "./pages/home";
import About from "./pages/about";
import CaseStudies from "./pages/case-studies";
import Contact from "./pages/contact";

const routes = [
  { route: "/", name: "Home", Component: Home },
  { route: "/about-us", name: "About Us", Component: About },
  { route: "/case-studies", name: "Case Studies", Component: CaseStudies },
  { route: "/contact", name: "Contact", Component: Contact },
];

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    gsap.to("body", { css: { visibility: "visible" } });
  }, []);

  return (
    <div className="App">
      <Header />
      {routes.map(({ route, Component }) => {
        return (
          <Route path={route} exact>
            <Component />
          </Route>
        );
      })}
    </div>
  );
}

export default App;
