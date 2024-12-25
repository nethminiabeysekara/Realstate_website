import React from "react";
import videoBg from "../../assets/bgvideo.mp4";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <h1>Search Your Next Home</h1>
        <p>Find new and featured property located in your local city.</p>

        <form className="flex">
          <div className="box">
            <span>Property Type</span>
            <input type="text" placeholder="type" />
          </div>
          <div className="box">
            <span>Number of bedrooms</span>
            <input type="text" placeholder="How many bedrooms" />
          </div>
          <div className="box">
            <span>Date added</span>
            <input type="text" placeholder="Date" />
          </div>

          <div className="box">
            <span>Postcode area</span>
            <input type="text" placeholder="BR1" />
          </div>

          <div className="box">
            <h4>Advance Filter</h4>
          </div>
          <button className="btn1">
            <i className="fa fa-search"></i> Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
