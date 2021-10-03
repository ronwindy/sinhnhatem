import logo from "./logo.svg";
import "./App.css";

function App() {
  let audio = new Audio("music/happy-birthday.mp3");
  const start = () => {
    audio.play();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={start}>Play</button>
    </div>
  );
}

export default App;
