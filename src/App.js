import React from 'react';
import './App.css';
import Die from './components/Die'
import { nanoid } from 'nanoid';

function App() {
  
  const [diceArray, setDiceArray] = React.useState(allNewDice())
  
  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push({
          value: Math.ceil(Math.random() * 6),
          isHeld:false,
          id:nanoid()
        })
    }
    return newDice
}
  const dieElements = diceArray.map(elem => <Die key={elem.id} value={elem.value}/>)
  
  function rollDice() {
    setDiceArray(allNewDice)
  }
  return (
    <main>
      <div className="container">
        {dieElements}
      </div>
      <button className="roll-button" onClick={rollDice}>Roll</button>
    </main>
    
  );
}

export default App;
