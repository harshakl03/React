import { useQuiz } from "../context/QuizProvider";

export default function Progress() {
  const { index, points, numQuestions, maxPossiblePoints, answer } = useQuiz();

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
