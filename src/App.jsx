import "./App.css";
import React from "react";
import Die from "./components/Die";

function App() {
  const [allDice, setAllDice] = React.useState(allNewDice());

  function allNewDice() {
    const array = [];
    for (let i = 0; i < 10; i++) {
      array.push(Math.ceil(Math.random() * 6));
    }
    return array;
  }

  function rollDice(){
    setAllDice(allNewDice())
  }


  return (
    <main>
      <div className="inner">
        {allDice.map((dieNum) => (
          <Die value={dieNum} />
        ))}
      </div>
      <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
  );
}

export default App;
