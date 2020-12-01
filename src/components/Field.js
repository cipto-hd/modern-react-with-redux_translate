import { useContext } from "react";
import Context from "../contexts/ContextStore";

const Field = () => {
  const { language } = useContext(Context);

  const labelText = language === "english" ? "Name" : "Naam";

  return (
    <div className="ui field">
      <label htmlFor="name">{labelText}</label>
      <input type="text" name="name" />
    </div>
  );
};

export default Field;
