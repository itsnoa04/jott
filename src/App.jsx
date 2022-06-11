import React from "react";
import "./App.css";
import Canvas from "./components/Canvas";
import { ToolProvider } from "./context/ToolContext";
import { StyleProvider } from "./context/StyleContext";
// import ToolMenu from "./components/ToolMenu";

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
          {/* <ToolMenu /> */}
        </StyleProvider>
      </ToolProvider>
    </div>
  );
}

export default App;
