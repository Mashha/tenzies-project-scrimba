import "./App.css";
import Die from "./components/Die";

function App() {
  function allNewDice() {
    const array = [];
    for (let i = 0; i < 10; i++) {
      array.push(Math.ceil(Math.random() * 6));
    }
    return array;
  }
  console.log(allNewDice());

  return (
    <main>
      <div className="inner">
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
      </div>
    </main>
  );
}

export default App;
