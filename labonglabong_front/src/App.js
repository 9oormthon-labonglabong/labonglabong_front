import logo from "./logo.svg";
import "./App.css";
import { Alert, UncontrolledAlert } from "@goorm-dev/gds-goormthon";
import { ActivityIcon, CheckCircleIcon } from "@goorm-dev/gds-goormthon";

function App() {
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
        <ActivityIcon width="1rem" className="ActivityIcon__icon" />
      </header>
    </div>
  );
}

export default App;
