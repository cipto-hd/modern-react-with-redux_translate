import { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

const Button = () => {
  const language = useContext(LanguageContext);

  const buttonText = language === "english" ? "Submit" : "Voorleggen";
  return <button className="ui primary button">{buttonText}</button>;
};

export default Button;
