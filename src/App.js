import React, { useState } from "react";
import Greet from "./Greet";
import Menu from "./Menu";

const buttons = [
  "7", "8", "9", "/",
  "4", "5", "6", "*",
  "1", "2", "3", "-",
  "0", ".", "=", "+"
];

function App() {
  const [input, setInput] = useState("");

  // Handle button clicksss
  const handleClick = (value) => {
    if (value === "=") {
      try {
        // eslint-disable-next-line no-eval
        const result = eval(input);
        setInput(result.toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  const handleClear = () => {
    setInput("");
  };

  return (
    <div style={{ maxWidth: 300, margin: "20px auto", textAlign: "center", fontFamily: "Arial" }}>
      <Greet message="Simple React Calculator" />
      <input
        type="text"
        value={input}
        readOnly
        style={{ width: "100%", fontSize: 24, padding: 10, marginBottom: 10, textAlign: "right" }}
      />
      <Menu buttons={buttons} onClick={handleClick} />
      <button onClick={handleClear} style={{ marginTop: 10, padding: "10px 20px" }}>Clear</button>
    </div>
  );
}

export default App;
