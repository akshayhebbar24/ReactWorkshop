import React, { useState } from "react";
import Greet from "./Greet";
import Menu from "./Menu";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState("");

  const handleCalculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Invalid input");
      return;
    }

    let res = 0;
    switch (operation) {
      case "+":
        res = a + b;
        break;
      case "-":
        res = a - b;
        break;
      case "*":
        res = a * b;
        break;
      case "/":
        res = b !== 0 ? a / b : "Cannot divide by zero";
        break;
      default:
        res = "Unknown operation";
    }

    setResult(res.toString());
  };

  return (
    <div style={{ maxWidth: 400, margin: "30px auto", textAlign: "center", fontFamily: "Arial" }}>
      <Greet message="React Calculator with Radio Buttons" />

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
      />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
      />

      <Menu operation={operation} setOperation={setOperation} />

      <button onClick={handleCalculate} style={{ marginTop: 10, padding: "10px 20px" }}>
        Calculate
      </button>

      <input
        type="text"
        value={result}
        readOnly
        placeholder="Result"
        style={{ width: "100%", padding: 10, marginTop: 20 }}
      />
    </div>
  );
}

export default App;
