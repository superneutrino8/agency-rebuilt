import React, { useEffect, useState } from "react";
import gsap from "gsap";
import Overlay from "../components/overlay";
import Banner from "../components/banner";
import Cases from "../components/cases";

let tl = gsap.timeline();

const IntroAnimtion = (AnimationStateChange) => {
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
      onComplete: AnimationStateChange,
    })
    .from(".Cases__Img", {
      scale: 1.4,
      ease: "expo.inOut",
      duration: 1.4,
      delay: -2,
    });
};

const Home = () => {
  const [animationCompleted, setAnimationCompleted] = useState(false);

  const AnimationStateChange = () => {
    setAnimationCompleted(true);
  };

  useEffect(() => {
    // timeline - GSAP Animation
    IntroAnimtion(AnimationStateChange);
  }, []);

  return (
    <>
      {animationCompleted === false ? <Overlay /> : ""}
      <Banner />
      <Cases />
    </>
  );
};

export default Home;
