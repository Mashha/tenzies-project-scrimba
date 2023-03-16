import "./App.css";
import React from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";

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

  return (
    <main>
      <div className="inner">
        {allDice.map((dieNum) => (
          <Die value={dieNum.value} key={dieNum.id} isHeld={dieNum.isHeld}/>
        ))}
      </div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
