import React, { useState, useEffect } from "react";
import { ReactComponent as UpArrow } from "../assets/svg/up-arrow-circle.svg";
import gsap from "gsap";

const t1 = gsap.timeline();

const Header = ({ dimension }) => {
  const [MenuState, setMenuState] = useState(false);

  useEffect(() => {
    if (MenuState) {
      gsap.to(".Navigation", {
        css: {
          display: "block",
        },
      });
      gsap.to("body", {
        css: {
          overflow: "hidden",
        },
      });
      t1.to(".App", {
        duration: 1,
        y: dimension.width <= 654 ? "70vh" : dimension.width / 2,
        ease: "expo.inOut",
      }).to(".nav__hamburger span", {
        duration: 1,
        delay: -1,
        scaleX: 0,
        transformOrigin: "50% 0%",
        ease: "expo.inOut",
      });
    } else {
      t1.to(".App", {
        duration: 1,
        y: "0vh",
        ease: "expo.inOut",
      });
    }
  }, [MenuState, dimension.width]);

  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <a href="/">Agency</a>
          </div>
          <div className="nav" onClick={() => setMenuState(!MenuState)}>
            <div className="nav__hamburger">
              <span></span>
              <span></span>
            </div>
            <div className="nav__arrow">
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
