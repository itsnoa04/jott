import React, { useContext } from "react";
import "./ToolButton.css";
import StyleContext from "../context/StyleContext";
import ToolContext from "../context/ToolContext";

const ToolButton = ({ icon, alt, size }) => {
  const { tool, setTool } = useContext(ToolContext);
  const { color } = useContext(StyleContext);
  console.log(color);

  const getStroke = () => {
    if (tool === alt) {
      return color;
    } else {
      return "hsla(0, 0%, 18%, 1)";
    }
  };

  let stroke = getStroke();

  return (
    <button
      onClick={() => setTool(alt)}
      className="btn-container"
      style={{ border: `0.5rem solid ${stroke}`, backgroundColor: stroke }}
    >
      <div className="btn">
        <img src={icon} alt={alt} style={{ width: size, height: size }} />
      </div>
    </button>
  );
};

export default ToolButton;
