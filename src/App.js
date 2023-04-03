import React from 'react';
import './App.css';
import Die from './components/Die'
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti'

function App() {

 /*  
-put real dice numbers on dices
-track rolls tries 
-track time took to win 
-save best time to localS */

  const [diceArray, setDiceArray] = React.useState(allNewDice())

  const [tenzies, setTenzies] = React.useState(false)

  function createDie() {
    return { 
      value: Math.ceil(Math.random() * 6),
      isHeld:false,
      id:nanoid()
    }
  }

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push(createDie())
    }
    return newDice
}

  function rollDice() {
    if(tenzies) {
      setDiceArray(allNewDice)
      setTenzies(false)
    } else {
      setDiceArray(oldArray => oldArray.map(die => {
        return die.isHeld === true ? {...die} : createDie()
      }))
    }
  }

  function holdDice(id) {
    setDiceArray(oldArray => oldArray.map(die => {
      return die.id === id ? {...die, isHeld:!die.isHeld} : {...die}
    }))
  }

  React.useEffect(() => {
    const allHeld = diceArray.every(dice => dice.isHeld)
    const firstVal = diceArray[0].value
    const allSameValues = diceArray.every(dice => dice.value === firstVal)
    if (allHeld && allSameValues) {
      setTenzies(true)
    }
  },[diceArray]);

  const dieElements = diceArray.map(elem => <Die key={elem.id} value={elem.value} isHeld={elem.isHeld} holdDice={()=>{holdDice(elem.id)}}/>)

  return (
    <main>
      <h1 className="title">Tenzies</h1>
        <p className="instructions">{tenzies ? "Congratulations, you won!" : "Roll until all dice are the same. Click each die to freeze it at its current value between rolls."}</p>
      <div className="container">
        {dieElements}
      </div>
      <button className="roll-button" onClick={rollDice}>{tenzies ? "New Game"  : "Roll"}</button>
      {tenzies && <Confetti /> }
    </main>
  );
}

export default App;
