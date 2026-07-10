import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("USD");
  const [output, setOutput] = useState(0);

  useEffect(
    function () {
      try {
        async function getRate() {
          if (currencyFrom === currencyTo || !amount) {
            setOutput(amount);
            return;
          }

          const res = await fetch(
            `https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${currencyFrom}&to=${currencyTo}`,
          );
          const data = await res.json();

          setOutput(data.rates[currencyTo]);
        }
        getRate();
      } catch (err) {
        console.log(err);
      }
    },
    [amount, currencyFrom, currencyTo],
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select
        value={currencyFrom}
        onChange={(e) => setCurrencyFrom(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={currencyTo}
        onChange={(e) => setCurrencyTo(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{output ? output : null}</p>
    </div>
  );
}

export default App;
