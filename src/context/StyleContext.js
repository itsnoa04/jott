import { createContext, useState } from "react";

const StyleContext = createContext();

export function StyleProvider({ children }) {
  const [color, setColor] = useState("#000");
  const [thickness, setThickness] = useState(16);
  return (
    <StyleContext.Provider
      value={{
        color,
        setColor,
        thickness,
        setThickness,
      }}
    >
      {children}
    </StyleContext.Provider>
  );
}

export default StyleContext;
