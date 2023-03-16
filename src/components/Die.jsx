export default function Die(props) {
  const style = {
    backgroundColor: props.isHeld === true ? "#59E391" : "#fff",
  };
  return (
    <div
      className="die-div"
      style={style}
      onClick={() => props.holdDice(props.id)}
    >
      <h2>{props.value}</h2>
    </div>
  );
}
