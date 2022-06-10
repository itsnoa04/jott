import { createContext, useState } from "react";

const ToolContext = createContext();

export function ToolProvider({ children }) {
  const [tool, setTool] = useState("pencil");
  return (
    <ToolContext.Provider
      value={{
        tool,
        setTool,
      }}
    >
      {children}
    </ToolContext.Provider>
  );
}

export default ToolContext;
