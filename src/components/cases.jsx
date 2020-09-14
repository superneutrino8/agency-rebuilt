import React from "react";
import { ReactComponent as RightArrow } from "../assets/svg/arrow-right.svg";
import { ReactComponent as LeftArrow } from "../assets/svg/arrow-left.svg";

const caseStudies = [
  {
    id: 1,
    subtitle: "Curology",
    title: "A custom formula for your skin's unique needs",
    img: "curology-min",
  },
  {
    id: 2,
    subtitle: "Yourspace",
    title: "Open space floor plans for your next venture",
    img: "yourspace-min",
  },
  {
    id: 3,
    subtitle: "Lumin",
    title: "For your best look ever",
    img: "lumin-min",
  },
];

function Cases() {
  return (
    <div className="Cases">
      <div className="container-fluid">
        <div className="row">
          <div className="Cases__Navigation">
            <span>
              <LeftArrow />
            </span>
            <span>
              <RightArrow />
            </span>
          </div>
          <div className="Cases__Main">
            {caseStudies.map((caseItem) => {
              return (
                <div className="Cases__Single" key={caseItem.key}>
                  <div className="Cases__Info">
                    <p className="Cases__Subtitle">{caseItem.subtitle}</p>
                    <p className="Cases__Title">{caseItem.title}</p>
                  </div>
                  <div className="Cases__Img">
                    <img
                      src={require(`../assets/images/${caseItem.img}.png`)}
                      alt={caseItem.subtitle}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cases;
