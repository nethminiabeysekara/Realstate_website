import React, { useState } from "react";
import videoBg from "../../assets/bgvideo.mp4";
import "./Hero.css";

const Hero = ({ onSearch }) => {
  const [propertyType, setPropertyType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [price, setPrice] = useState("");
  const [postcode, setPostcode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ propertyType, bedrooms, price, postcode }); // Pass search data to parent
  };

  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <h1>Search Your Next Home</h1>
        <p>Find new and featured property located in your local city.</p>

        <form className="flex" onSubmit={handleSubmit}>
          <div className="box">
            <span>Property Type</span>
            <input
              type="text"
              placeholder="Type"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            />
          </div>
          <div className="box">
            <span>Number of bedrooms</span>
            <input
              type="text"
              placeholder="How many bedrooms"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
            />
          </div>
          <div className="box">
            <span>Price</span>
            <input
              type="text"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="box">
            <span>Postcode area</span>
            <input
              type="text"
              placeholder="Number"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
            />
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
