import "./App.css";
import React from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import { first, set } from "lodash";

function App() {
  const [allDice, setAllDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(
    function () {
      const allHeld = allDice.every((die) => die.isHeld);
      const firstValue = allDice[0].value;
      const allSame = allDice.every((die) => firstValue === die.value);
      if (allHeld && allSame) {
        setTenzies(true);
        console.log("you won");
      }
    },
    [allDice]
  ); // run when dice array changes

  function allNewDice() {
    const array = [];
    for (let i = 0; i < 10; i++) {
      array.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return array;
  }

  //generate new die every time
  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function rollDice() {
    setAllDice((allDice) =>
      allDice.map((die) => {
        if (die.isHeld === true) {
          return die;
        }
        return generateNewDie();
      })
    );
  }

  function holdDice(id) {
    setAllDice((allDice) =>
      allDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="inner">
        {allDice.map((dieNum) => (
          <Die
            value={dieNum.value}
            key={dieNum.id}
            isHeld={dieNum.isHeld}
            holdDice={holdDice}
            id={dieNum.id}
          />
        ))}
      </div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
