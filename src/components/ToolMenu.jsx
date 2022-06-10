import React from "react";
import "./ToolMenu.css";
import ToolButton from "./ToolButton";
import ThicknessSlider from "./ThicknessSlider";
import Eracer from "../assets/eracer.svg";
import Pencil from "../assets/pencil.svg";
import ColorPicker from "./ColorPicker";

const ToolMenu = () => {
  return (
    <div className="tool-menu">
      <ToolButton icon={Eracer} alt="eracer" size="3rem" />
      <ToolButton icon={Pencil} alt="pencil" size="3rem" />
      <ThicknessSlider />
      <ColorPicker />
    </div>
  );
};

export default ToolMenu;
