import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);
  const today = new Date();
  const updatedDate = new Date();
  updatedDate.setDate(today.getDate() + counter);

  return (
    <>
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={() => setCounter(counter - step)}>-</button>
        <input
          type="text"
          value={counter}
          onChange={(e) => setCounter(parseInt(e.target.value))}
        />
        <button onClick={() => setCounter(counter + step)}>+</button>
      </div>
      <div>
        {counter === 0
          ? "Today is"
          : counter > 0
            ? `${counter} days from today is`
            : `${Math.abs(counter)} days ago was`}{" "}
        {updatedDate.toDateString()}
      </div>
      {(counter !== 0 || step !== 1) && (
        <button
          onClick={() => {
            setCounter(0);
            setStep(1);
          }}
        >
          Reset
        </button>
      )}
    </>
  );
}
