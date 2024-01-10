import React from "react";
import Header from "../Home/Header";
import Reason from "../Home/Reason";
import Showcase from "../Home/Showcase";
import Service from "../Home/Services";
import Contact from "../Home/Contact";
import Footer from "../Component/Footer";

const Home = () => {
  return (
    <div className="section-home">
      <div className="Header">
        <Header />
      </div>
      <div className="Main">
        <Reason />
        <Showcase />
        <Service />
        {/* <Blog/> */}
        <Contact />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
