import { createContext, useState } from "react";

const INITIAL_STATE = {
  language: "english",
  color: "primary",
};

const Context = createContext(INITIAL_STATE);

export const ContextStore = ({ children }) => {
  const [language, setLanguage] = useState(INITIAL_STATE.language);
  const [color, setColor] = useState(INITIAL_STATE.color);

  return (
    <Context.Provider value={{ language, color, setLanguage, setColor }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
