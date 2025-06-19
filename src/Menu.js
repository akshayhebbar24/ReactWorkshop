import React from "react";

function Menu({ operation, setOperation }) {
  const operations = ["+", "-", "*", "/"];

  return (
    <div style={{ margin: "10px 0" }}>
      {operations.map((op) => (
        <label key={op} style={{ marginRight: 15 }}>
          <input
            type="radio"
            name="operation"
            value={op}
            checked={operation === op}
            onChange={(e) => setOperation(e.target.value)}
          />
          {op}
        </label>
      ))}
    </div>
  );
}

export default Menu;
