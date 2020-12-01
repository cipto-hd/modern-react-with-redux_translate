import { useState } from "react";
import LanguageContext from "../contexts/LanguageContext";
import UserCreate from "./UserCreate";

const App = () => {
  const [language, setLanguage] = useState("english");

  return (
    <div className="ui container">
      <div>
        Select a language:
        <i className="flag us" onClick={() => setLanguage("english")} />
        <i className="flag nl" onClick={() => setLanguage("dutch")} />
      </div>
      <LanguageContext.Provider value={language}>
        <UserCreate />
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
