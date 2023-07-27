import React from "react";
import heroImage1 from "../../image/home1.png"; // Replace with your image paths
import heroImage2 from "../../image/home2.png"; // Replace with your image paths
import "../../styles/heroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="image-container">
        <img className="hero-img" src={heroImage1} alt="Hero 1" />
      </div>
      <div className="image-container">
        <img className="hero-img one" src={heroImage2} alt="Hero 2" />
      </div>
      <div className="hero-content">
        <h1> RAW, EARTHY & FLUID </h1>
        <button className="hero-btn"> Shop Now </button>
      </div>
    </div>
  );
}

export default HeroSection;
