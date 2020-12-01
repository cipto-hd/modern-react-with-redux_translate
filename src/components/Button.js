import { useContext } from "react";
import Context from "../contexts/ContextStore";

const Button = () => {
  const { language, color } = useContext(Context);
  const buttonText = language === "english" ? "Submit" : "Voorleggen";

  return <button className={`ui ${color} button`}>{buttonText}</button>;
};

export default Button;
