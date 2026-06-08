import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);
  const today = new Date();
  const updatedDate = new Date();
  updatedDate.setDate(today.getDate() + counter);
  return (
    <div className="App">
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCounter((c) => c - step)}>-</button>
        <span>Counter: {counter}</span>
        <button onClick={() => setCounter((c) => c + step)}>+</button>
      </div>
      <div>
        {counter === 0
          ? "Today is"
          : `${Math.abs(counter)} days ${
              counter > 0 ? "from today is " : "ago was"
            }`}{" "}
        {updatedDate.toDateString()}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
