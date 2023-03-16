export default function Die(props) {
  const style = {
    backgroundColor: props.isHeld === true ? "#59E391" : "#fff",
  };
  return (
    <div className="die-div" style={style}>
      <h2>{props.value}</h2>
    </div>
  );
}
