import { createContext, useState } from "react";

const StyleContext = createContext();

export function StyleProvider({ children }) {
  const [color, setColor] = useState("hsla(14, 100%, 80%, 1)");
  const [size, setSize] = useState(16);
  return (
    <StyleContext.Provider
      value={{
        color,
        setColor,
        size,
        setSize,
      }}
    >
      {children}
    </StyleContext.Provider>
  );
}

export default StyleContext;
