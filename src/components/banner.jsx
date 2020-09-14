import React from "react";
import { ReactComponent as RightArrow } from "../assets/svg/arrow-right.svg";

function banner() {
  return (
    <div className="Banner">
      <div className="container">
        <div className="row">
          <h2>
            <div className="Banner__line">Creating unique brands is</div>
            <div className="Banner__line">what we do</div>
          </h2>
          <div className="Banner__Info">
            <span>
              More about us <RightArrow />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default banner;
