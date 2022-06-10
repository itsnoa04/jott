import React from "react";
import "./App.css";
import Canvas from "./components/Canvas";
import ToolButton from "./components/ToolButton";
import Eracer from "./assets/eracer.svg";
import Pencil from "./assets/pencil.svg";
import { ToolProvider } from "./context/ToolContext";
import { StyleProvider } from "./context/StyleContext";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ToolProvider>
        <StyleProvider>
          <Canvas />
          <ToolButton icon={Eracer} alt="eracer" size="3rem" />
          <ToolButton icon={Pencil} alt="pencil" size="3rem" />
        </StyleProvider>
      </ToolProvider>
    </div>
  );
}

export default App;
