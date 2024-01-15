export default function FinishScreen({
  points,
  maxPossiblePoints,
  highscore,
  dispatch,
}) {
  return (
    <>
      <p className="result">
        You scored {points} out of {maxPossiblePoints} (
        {Math.ceil((points / maxPossiblePoints) * 100)}%)
      </p>
      <p className="highscore">(HighScore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}
