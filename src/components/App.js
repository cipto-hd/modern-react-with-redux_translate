import { ContextStore } from "../contexts/ContextStore";
import ColorSelector from "./ColorSelector";
import LanguageSelector from "./LanguageSelector";
import UserCreate from "./UserCreate";

const App = () => {
  return (
    <div className="ui container">
      <ContextStore>
        <LanguageSelector />
        <ColorSelector />
        <UserCreate />
      </ContextStore>
    </div>
  );
};

export default App;
