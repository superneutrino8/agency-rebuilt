import React from "react";
import { ReactComponent as RightArrow } from "../assets/svg/arrow-right.svg";

function Banner() {
  return (
    <div className="Banner">
      <div className="container">
        <div className="row">
          <h2>
            <div className="Banner__line"><span>Creating unique brands is</span></div>
            <div className="Banner__line"><span>what we do</span></div>
          </h2>
          <div className="Banner__Info">
            <p>More about us</p>
            <span>
              <RightArrow />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
