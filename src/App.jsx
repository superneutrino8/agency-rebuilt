import React, { useEffect } from "react";
import gsap from "gsap";
import Banner from "./components/banner";
import Cases from "./components/cases";
import Header from "./components/header";
import Overlay from "./components/overlay";
import "./styles/App.scss";

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    gsap.to("body", { css: { visibility: "visible" } });

    // timeline - GSAP Animation
    let tl = gsap.timeline();
    tl.from(".Banner__line", {
      y: 100,
      ease: "power3.out",
      duration: 1,
      skewY: 7,
      stagger: {
        amount: 0.4,
      },
    })
      .to(".Overlay__Top-Single", {
        height: 0,
        duration: 1.4,
        ease: "expo.inOut",
        stagger: {
          amount: 0.4,
        },
      })
      .to(".Overlay", { css: { display: "none" } })
      .to(".Overlay__Bottom-Single", {
        width: 0,
        ease: "expo.inOut",
        duration: 1.4,
        delay: -0.8,
        stagger: {
          amount: 0.4,
        },
      })
      .from(".Cases__Img", {
        scale: 1.4,
        ease: "expo.inOut",
        duration: 1.4,
        delay: -2,
      });
  }, []);

  return (
    <div className="App">
      <Overlay />
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;
