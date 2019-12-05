import React, { useState, useEffect } from "react";
import "./App.css";
// Inject into import block
import {
  getSdkEnvironment,
  SdkEnvironmentNames,
  createSdk
} from "@archanova/sdk";
import { TerminalHttpProvider } from "@terminal-packages/sdk";
import Web3 from "web3";

function App() {
  const [web3, setWeb3] = useState(null);
  const [aSdk, setSdk] = useState(null);

  useEffect(() => {
    initSdk();
  }, []);

  const initSdk = async () => {
    // Select the ethereum network
    let sdkEnv = getSdkEnvironment(SdkEnvironmentNames.Kovan); // kovan env by default
    // Create SDK instance and store locally
    const sdk = new createSdk(sdkEnv.setConfig("storageAdapter", localStorage));
    // Initialize instance
    await sdk.initialize();
    setSdk(sdk);
  };

  const initWeb3 = () => {
    setWeb3(
      new Web3(
        new TerminalHttpProvider({
          customHttpProvider: aSdk.eth,
          source: "Abridged",
          apiKey: "rt92QzoCp2/KdqHjBgbccA==",
          projectId: "geParyjQMPjpqXxO"
        })
      )
    );
    console.log(web3);
    console.log(aSdk);
  };

  return (
    <div>
      <button onClick={() => initWeb3()}>Initialize Web3</button>
      <button onClick={() => aSdk.eth.blockNumber().then(console.log)}>
        Deploy Account
      </button>
    </div>
  );
}

export default App;
