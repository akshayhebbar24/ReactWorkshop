import React, { useState } from 'react';
//import './App.css';
import Menu from './Menu';

function App() {
  const [showCard, setShowCard] = useState(false);

  function handleClick() {
    setShowCard(true);
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Click here for my card</button>
      {showCard && <Menu />}
    </div>
  );
}

export default App;
