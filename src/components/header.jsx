import React, { useState, useEffect } from "react";
import { ReactComponent as UpArrow } from "../assets/svg/up-arrow-circle.svg";
import gsap from "gsap";

const t1 = gsap.timeline();

const Header = ({ height }) => {
  const [MenuState, setMenuState] = useState(false);

  useEffect(() => {
    if (MenuState) {
      t1.to(".nav__hamburger", {
        duration: 0.2,
        css: {
          display: "none",
        },
      })
        .from(".Navigation", {
          css: {
            display: "none",
          },
        })
        .to(".Navigation", {
          y: 0,
          css: {
            display: "block",
          },
        })
        .to(".App", {
          y: height <= "740" ? "70vh" : "50vh",
        })
        .to(".nav__arrow", {
          duration: 0.2,
          css: {
            display: "block",
          },
        });
    } else {
      t1.to(".nav__arrow", {
        duration: 0.2,
        css: {
          display: "none",
        },
      }).to(".nav__hamburger", {
        duration: 0.2,
        css: {
          display: "block",
        },
      });
    }
  }, [MenuState, height]);

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
