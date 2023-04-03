import React from 'react';
import './App.css';
import Die from './components/Die'
import { nanoid } from 'nanoid';

function App() {

/**
 * Challenge: Update the `rollDice` function to not just roll
 * all new dice, but instead to look through the existing dice
 * to NOT role any that are being `held`.
 * 
 * Hint: this will look relatively similiar to the `holdDice`
 * function below. When creating new dice, remember to use
 * `id: nanoid()` so any new dice have an `id` as well.
 */

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

  const dieElements = diceArray.map(elem => <Die key={elem.id} value={elem.value} isHeld={elem.isHeld} holdDice={()=>{holdDice(elem.id)}}/>)
  
  function rollDice() {
    setDiceArray(oldArray => oldArray.map(die => {
      return die.isHeld === true ? {...die} : { 
        value: Math.ceil(Math.random() * 6),
        isHeld:false,
        id:nanoid()}
    }))
  }

  function holdDice(id) {
    setDiceArray(oldArray => oldArray.map(die => {
      return die.id === id ? {...die, isHeld:!die.isHeld} : {...die}
    }))
  }

  return (
    <main>
      <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="container">
        {dieElements}
      </div>
      <button className="roll-button" onClick={rollDice}>Roll</button>
    </main>
  );
}

export default App;
