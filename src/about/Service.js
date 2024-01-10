import React from "react";
import "./about.css";

function ServiceAbout(props) {
  return (
    <div className="service-about">
      <div className="container">
        <div className="service-about">
          <div className="ui-ux">
            <img className="ui-uxImg" />
            <h5>UI/UX Design</h5>
            <p>Base on Dekstop and Mobile</p>
          </div>
          <div className="front-end">
            <img className="fron-endImg" />
            <h5>Front-end Developer</h5>
            <p>Base on Dekstop</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceAbout;
