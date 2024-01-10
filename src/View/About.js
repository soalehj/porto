import React from "react";
import IntroAbout from "../about/Intro";
import ServiceAbout from "../about/Service";
import ExperianceAbout from "../about/Experiance";
import Passion from "../about/Passion";
import Footer from "../Component/Footer";

function About(props) {
  return (
    <div className="section-about">
      <div className="py-3"></div>
      <div className="about">
        <IntroAbout />
        <ServiceAbout />
        <ExperianceAbout />
        <Passion />
      </div>
      <div className="py-4"></div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default About;
