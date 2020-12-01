import { useContext } from "react";
import Context from "../contexts/ContextStore";

const ColorSelector = () => {
  const { setColor } = useContext(Context);

  return (
    <div>
      Select a button color:
      <i className="red circle icon" onClick={() => setColor("red")} />
      <i className="blue circle icon" onClick={() => setColor("primary")} />
    </div>
  );
};

export default ColorSelector;
