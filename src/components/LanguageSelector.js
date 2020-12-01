import { useContext } from "react";
import Context from "../contexts/ContextStore";

const LanguageSelector = () => {
  const { setLanguage } = useContext(Context);

  return (
    <div>
      Select a language:
      <i className="flag us" onClick={() => setLanguage("english")} />
      <i className="flag nl" onClick={() => setLanguage("dutch")} />
    </div>
  );
};

export default LanguageSelector;
