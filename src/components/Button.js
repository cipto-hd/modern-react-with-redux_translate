import { useContext } from "react";
import ColorContext from "../contexts/ColorContext";
import LanguageContext from "../contexts/LanguageContext";

const Button = () => {
  const language = useContext(LanguageContext);
  const color = useContext(ColorContext);

  const buttonText = language === "english" ? "Submit" : "Voorleggen";
  return <button className={`ui ${color} button`}>{buttonText}</button>;
};

export default Button;
