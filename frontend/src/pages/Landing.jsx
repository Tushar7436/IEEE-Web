import React from "react";
import DynamicText from "../components/DynamicText";
import "../assets/styles/Landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <header className="land-header">
        <h1>Welcome to IEEE </h1> <h1> VIT Bhopal Chapter</h1>
        <DynamicText /> {/* Dynamic Text Area */}
        <div className="btn-container">
          <div className="inner">
            <div className="shapeSM"></div>
            <div className="lrn-more box" onClick={"/About"}>
              Learn More
              {/* <span className="arrow"> */}
              <i class="fa-solid fa-arrow-right fa-xl arrow"></i>
              {/* </span> */}
            </div>
          </div>
          <div className="inner">
            <div className="contact box" onClick={"/OurTeam"}>
              Contact Us
              {/* <span className="arrow"> */}
              <i class="fa-solid fa-arrow-right fa-xl arrow"></i>
              {/* </span> */}
            </div>
            <div className="shapeLG"></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Landing;
