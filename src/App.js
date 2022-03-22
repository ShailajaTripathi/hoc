import "./App.css";
import Hoc1 from "./Components/Hoc1";
import Hoc2 from "./Components/Hoc2";
import Hoc3 from "./Components/Hoc3";
import Hoc4 from "./Components/Hoc4";
import Token from "./Components/Token";

function App() {
  return (
    <div className="App">
      <h2>Buy Token on the basis of age groups</h2>
      <div className="row">
        <div className="col-1">
          <Hoc1 cmp={Token} />
        </div>
        <div className="col-2">
         
          <Hoc2 cmp={Token} />
        </div>
      </div>
      <div className="row">
        <div className="col-1">
          <Hoc3 cmp={Token} />
        </div>
        <div className="col-2">
          <Hoc4 cmp={Token} />
        </div>
      </div>
    </div>
  );
}

export default App;
