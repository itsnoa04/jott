import React, { useContext, useEffect } from "react";
import StyleContext from "../context/StyleContext";

import "./ThicknessSlider.css";

const ThicknessSlider = () => {
  const { thickness, setThickness, color } = useContext(StyleContext);
  const [percentage, setPercentage] = React.useState(0);

  const getPercentage = () => {
    return (thickness / 60) * 100;
  };

  useEffect(() => {
    if (thickness < 5) {
      setThickness(0);
    }
    if (thickness > 60) {
      setThickness(60);
    }
    setPercentage(getPercentage());
  }, [thickness]);

  useEffect(() => {
    document.documentElement.style.setProperty("--color", color);
  }, [color]);

  return (
    <div className="slider-container">
      <div className="preview">
        <div
          className="previewDot"
          style={{
            border: `${thickness / 2}px solid ${color}`,
            backgroundColor: color,
          }}
        />
      </div>
      <div className="slider">
        <h2 className="slider-text">Thickness</h2>
        <div className="slider-input">
          <div
            className="thumb"
            style={{
              left: `${percentage}%`,
            }}
          />
          <div
            className="bar"
            style={{
              width: `${percentage}%`,
            }}
          />
          <input
            value={thickness}
            onChange={(e) => setThickness(e.target.value)}
            type="range"
            min="5"
            max="60"
            step="2"
          />
        </div>
      </div>
      <div className="value">
        <input
          type="number"
          min="5"
          max="60"
          className="value-input"
          value={thickness}
          onChange={(e) => {
            setThickness(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default ThicknessSlider;
