import React from 'react';
import './App.css';
import Die from './components/Die'
import { nanoid } from 'nanoid';

function App() {

  /**
 * Challenge: Update the `holdDice` function to flip
 * the `isHeld` property on the object in the array
 * that was clicked, based on the `id` prop passed
 * into the function.
 * 
 * Hint: as usual, there's > 1 way to accomplish this.
 * I'll be using `dice.map()` and checking for the `id`
 * of the die to determine which one to flip `isHeld` on,
 * but you can do whichever way makes the most sense to you.
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
    setDiceArray(allNewDice)
  }

  function holdDice(id) {
    setDiceArray(oldDice => oldDice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : {...die}
    }))
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
