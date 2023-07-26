import React from "react";
import "../../styles/occasion.css";

function Occassions() {
  return (
    <div className="occasion">
      <div className="occasion-content">
        <h2>Be Ready for Any Occasion</h2>
        <p>
          Revive your inner light with our latest arrivals, inspired by the
          undulating curves of the female form, and mimicking the sweet serenity
          of a far-flung oasis.
        </p>
      </div>

      <div className="occasion-section">
        <div className="image-row">
          {/* Add three wedding images here */}
          <h3>Shop Wedding</h3>
          <img src={require("../../image/wedding1.png")} alt="Category 5" />
          <img src={require("../../image/wedding2.png")} alt="Category 5" />
          <img src={require("../../image/wedding3.png")} alt="Category 5" />
        </div>
      </div>

      <div className="occasion-section">
        <div className="image-row">
          {/* Add three beach images here */}

          <img src={require("../../image/beach1.png")} alt="Category 5" />
          <img src={require("../../image/beach2.png")} alt="Category 5" />
          <img src={require("../../image/beach3.png")} alt="Category 5" />

          <h3>Shop Beach</h3>
        </div>
      </div>

      <div className="occasion-section">
        <div className="image-row">
          <h3>Shop Resort</h3>
          {/* Add three resort images here */}
          <img src={require("../../image/resort1.png")} alt="Category 5" />
          <img src={require("../../image/resort2.png")} alt="Category 5" />
          <img src={require("../../image/resort3.png")} alt="Category 5" />
        </div>
      </div>
    </div>
  );
}

export default Occassions;
