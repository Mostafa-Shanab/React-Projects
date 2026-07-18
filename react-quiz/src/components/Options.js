import { useQuiz } from "../contexts/QuizContext";

function Options() {
  const { questions, dispatch, answer, index: globalIndex } = useQuiz();

  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {questions[globalIndex].options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === questions[globalIndex].correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
