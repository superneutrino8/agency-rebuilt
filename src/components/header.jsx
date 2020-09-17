import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { ReactComponent as UpArrow } from "../assets/svg/up-arrow-circle.svg";
import gsap from "gsap";

const t1 = gsap.timeline();

const Header = ({ history, dimension }) => {
  const [MenuState, setMenuState] = useState(false);

  useEffect(() => {
    history.listen(() => {
      setMenuState(false);
    });

    if (MenuState) {
      console.log("Change");
      t1.to(".Navigation", {
        duration: 0,
        css: { display: "block" },
      })
        .to("body", {
          css: { overflow: "hidden" },
          duration: 0,
        })
        .to(".App", {
          duration: 1,
          // delay: -1,
          y: dimension.width <= 654 ? "70vh" : "50vh",
          // ease: "expo.inOut",
        })
        .to(".nav__hamburger span", {
          duration: 1,
          delay: -1,
          scaleX: 0,
          transformOrigin: "50% 0%",
          ease: "expo.inOut",
        })
        .to("#Path_1", {
          delay: -0.6,
          duration: 0.4,
          css: {
            strokeDasharray: 5,
            strokeDashoffset: 10,
          },
        })
        .to("#Path_2", {
          delay: -0.6,
          duration: 0.4,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 20,
          },
        })
        .to("#Line_1", {
          delay: -0.6,
          duration: 0.4,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 18,
          },
        })
        .to("#circle", {
          delay: -0.8,
          duration: 0.4,
          css: {
            strokeDashoffset: 0,
          },
          ease: "expo.inOut",
        })
        .to(".nav__arrow", {
          css: { display: "block" },
        });
    } else {
      t1.to(".App", {
        y: "0vh",
        ease: "expo.inOut",
      })
        .to(".nav__arrow", {
          css: { display: "none" },
        })
        .to(".nav__hamburger span", {
          scaleX: 1,
          transformOrigin: "50% 0%",
          ease: "expo.inOut",
        })
        .to("body", { css: { overflow: "auto" } })
        .to(".Navigation", {
          css: { display: "none" },
        });
    }
  }, [MenuState, dimension.width, history]);

  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <NavLink to="/" exact>
              AGENCY
            </NavLink>
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

export default withRouter(Header);
