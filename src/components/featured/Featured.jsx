import React from "react";
import "./Featured.css";
import { FaHome, FaBuilding } from "react-icons/fa";
import { BsBuilding } from 'react-icons/bs';

function Featured() {
  return (
    <section className="featured">
      <div className="container">
        <h2 className="title">Featured Property Types</h2>
        <p className="description">Explore our range of property types tailored to suit your lifestyle and preferences</p>
        <div className="featured-list">
          <div className="featured-item">
            <FaHome className="icon" />
            <h3>Houses</h3>
          </div>
          <div className="featured-item">
            <FaBuilding className="icon" />
            <h3>Appartments</h3>
          </div>
          <div className="featured-item">
  <BsBuilding className="icon" />
  <h3>Flats</h3>
</div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
