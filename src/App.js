import React from "react";
import logo from "./logo.svg";
import "./App.css";
// Inject into import block
import {
  getSdkEnvironment,
  SdkEnvironmentNames,
  createSdk
} from "@archanova/sdk";

// Select the ethereum network
let sdkEnv = getSdkEnvironment(SdkEnvironmentNames.Kovan); // kovan env by default
// Create SDK instance and store locally
const sdk = new createSdk(sdkEnv.setConfig("storageAdapter", localStorage));
// Initialize instance
sdk.initialize().then(console.log(sdk));

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
      </header>
    </div>
  );
}

export default App;
