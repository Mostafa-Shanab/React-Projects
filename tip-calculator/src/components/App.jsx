import "./App.css";
import BillInput from "./BillInput";
import Service from "./Service";
import Result from "./Result";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [mypercent, setMypercent] = useState(5);
  const [friendpercent, setFriendpercent] = useState(5);
  const avgPercent = ((mypercent + friendpercent) / 2 / 100).toFixed(4);

  return (
    <>
      <BillInput bill={bill} setBill={setBill} />
      <Service mypercent={mypercent} setMypercent={setMypercent}>
        <span>You Service</span>
      </Service>
      <Service mypercent={friendpercent} setMypercent={setFriendpercent}>
        <span>Friend Service</span>
      </Service>
      {bill !== 0 && (
        <div style={{ marginBlock: 33, fontSize: 30, fontWeight: "bold" }}>
          <Result bill={bill} perc={avgPercent} />{" "}
          <button
            style={{
              marginBlock: 10,
              fontSize: 20,
              padding: 15,
              cursor: "pointer",
            }}
            onClick={() => {
              setBill(0);
              setMypercent(5);
              setFriendpercent(5);
            }}
          >
            Reset
          </button>
        </div>
      )}
    </>
  );
}

export default App;
