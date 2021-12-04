import logo from "./logo.svg";
import "./App.css";
import Zapper from "../src/components/zapper.js";
import mySVG from "../src/media/powered_by_zap_black.svg";

function App() {
  return (
    <div className="App">
      <div className="poweredBy">
        <a href="https://zapper.fi" target="_blank">
          <img src={mySVG} alt="powered by zapper.fi!" />
        </a>
      </div>

      <Zapper />
    </div>
  );
}

export default App;
