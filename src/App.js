import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Lamp from "./Components/Lamp.js";



function App() {
  return (
    <div class="">
    
      <Router>
        <Switch>
          <Route path="/" exact component={Lamp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
