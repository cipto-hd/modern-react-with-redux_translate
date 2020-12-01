import { useState } from "react";
import ColorContext from "../contexts/ColorContext";
import LanguageContext from "../contexts/LanguageContext";
import UserCreate from "./UserCreate";

const App = () => {
  const [language, setLanguage] = useState("english");
  const [color, setColor] = useState("english");

  return (
    <div className="ui container">
      <div>
        Select a language:
        <i className="flag us" onClick={() => setLanguage("english")} />
        <i className="flag nl" onClick={() => setLanguage("dutch")} />
      </div>
      <div>
        Select a button color:
        <i className="red circle icon" onClick={() => setColor("red")} />
        <i className="blue circle icon" onClick={() => setColor("primary")} />
      </div>
      <ColorContext.Provider value={color}>
        <LanguageContext.Provider value={language}>
          <UserCreate />
        </LanguageContext.Provider>
      </ColorContext.Provider>
    </div>
  );
};

export default App;
