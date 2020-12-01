// import { useContext } from "react";
import ColorContext from "../contexts/ColorContext";
import LanguageContext from "../contexts/LanguageContext";

const Button = () => {
  // const language = useContext(LanguageContext);
  // const color = useContext(ColorContext);
  // const buttonText = language === "english" ? "Submit" : "Voorleggen";

  const renderButtonText = (language) =>
    language === "english" ? "Submit" : "Voorleggen";

  const renderButton = (color) => (
    <button className={`ui ${color} button`}>
      <LanguageContext.Consumer>
        {(language) => renderButtonText(language)}
      </LanguageContext.Consumer>
    </button>
  );

  return (
    <ColorContext.Consumer>
      {(color) => renderButton(color)}
    </ColorContext.Consumer>
  );
};

export default Button;
