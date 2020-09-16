import React, { useEffect, useState } from "react";
import gsap from "gsap";
import Overlay from "../components/overlay";
import Banner from "../components/banner";
import Cases from "../components/cases";

const IntroAnimtion = () => {
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
};

const Home = () => {
  useEffect(() => {
    // timeline - GSAP Animation
    IntroAnimtion();
  }, []);

  const [animationCompleted, setAnimationCompleted] = useState(false);

  return (
    <div className="App">
      <Overlay />
      <Banner />
      <Cases />
    </div>
  );
};

export default Home;
