import React, { useContext } from "react";
import StyleContext from "../context/StyleContext";
import "./ColorPicker.css";

const ColorPicker = () => {
  const { color, setColor } = useContext(StyleContext);

  return (
    <div className="color">
      <div
        className="frame"
        style={{
          backgroundColor: color,
        }}
      />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
};

export default ColorPicker;
