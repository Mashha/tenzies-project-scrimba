import "./App.css";
import React from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import { set } from "lodash";

function App() {
  const [allDice, setAllDice] = React.useState(allNewDice());

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

  function rollDice() {
    setAllDice(allNewDice());
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
