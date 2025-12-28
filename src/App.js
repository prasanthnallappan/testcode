import React, { useState } from "react";
import { sendData, getReport } from "./api";

function App() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    const response = await sendData({ user: "test-user", value: 100 });
    setMessage(response);
  };

  const handleGetData = async () => {
    const data = await getReport();
    setResult(JSON.stringify(data, null, 2));
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>React → ACA → Node Test</h2>

      <button onClick={handleSubmit}>Send Data</button>
      <p>{message}</p>

      <hr />

      <button onClick={handleGetData}>Get Report</button>
      <pre>{result}</pre>
    </div>
  );
}

export default App;
