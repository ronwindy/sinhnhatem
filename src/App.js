import Gift from "./Gift.js";
import Slideshow from "./Slideshow.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
          <Route path="/">
            <Gift />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
