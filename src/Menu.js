import React from "react";

function Menu({ buttons, onClick }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
      {buttons.map((btn, index) => (
        <button
          key={index}
          onClick={() => onClick(btn)}
          style={{ padding: 20, fontSize: 18 }}
        >
          {btn}
        </button>
      ))}
    </div>
  );
}

export default Menu;
