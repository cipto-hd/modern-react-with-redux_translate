import { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

const Field = () => {
  const language = useContext(LanguageContext);

  const labelText = language === "english" ? "Name" : "Naam";

  return (
    <div className="ui field">
      <label htmlFor="name">{labelText}</label>
      <input type="text" name="name" />
    </div>
  );
};

export default Field;
