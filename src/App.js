import Gift from "./Gift.js";
import Slideshow from "./Slideshow.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Letter from "./Letter.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/slideshow">
            <Slideshow />
          </Route>
          <Route path="/gift">
            <Gift />
          </Route>
          <Route path="/letter">
            <Letter />
          </Route>
          <Route path="/">
            <Gift />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
