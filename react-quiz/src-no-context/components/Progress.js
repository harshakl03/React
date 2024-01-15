export default function Progress({
  index,
  points,
  numQuestions,
  maxPossiblePoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question {index + 1}/{numQuestions}
      </p>
      <p>
        Question {points}/{maxPossiblePoints}
      </p>
    </header>
  );
}
