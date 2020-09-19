import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="Navigation">
      <div className="container">
        <div className="row">
          <div className="Navigation__Columns">
            <div className="Navigation__Column">
              <div className="Navigation__ColumnTitle">
                <span>Menu</span>
              </div>
              <div className="Navigation__Link">
                <NavLink to="/case-studies" exact>
                  Case Studies
                </NavLink>
                <NavLink to="/about" exact>
                  About
                </NavLink>
                <NavLink to="/contact-us" exact>
                  Contact Us
                </NavLink>
              </div>
            </div>
            <div className="Navigation__Column">
              <div className="Navigation__ColumnTitle">Contact</div>
              <div className="Navigation__List">
                <div className="Navigation__LinkGroup">
                  <div className="Navigation__LinkGroup--Title">
                    <p>Email</p>
                  </div>
                  <div className="Navigation__LinkGroup--Info">
                    <NavLink to="/contact-us" exact>
                      Get in touch
                    </NavLink>
                    <NavLink to="/contact-us" exact>
                      Get a free audit
                    </NavLink>
                  </div>
                </div>
                <div className="Navigation__LinkGroup">
                  <div className="Navigation__LinkGroup--Title">
                    <p>Headquater</p>
                  </div>
                  <div className="Navigation__LinkGroup--Info">
                    <p>Route du Jura 49</p>
                    <p>1700 Fribourg</p>
                    <p>Switzerland</p>
                  </div>
                </div>
                <div className="Navigation__LinkGroup">
                  <div className="Navigation__LinkGroup--Title">
                    <p>Phone</p>
                  </div>
                  <div className="Navigation__LinkGroup--Info">
                    <p>+41 (0) 79 510 28 70</p>
                  </div>
                </div>
                <div className="Navigation__LinkGroup">
                  <div className="Navigation__LinkGroup--Title">
                    <p>Legal</p>
                  </div>
                  <div className="Navigation__LinkGroup--Info">
                    <p>Privacy & Cookies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
