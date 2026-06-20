function Result({ bill, perc }) {
  return (
    <div>
      You Pay ${bill + bill * perc} (${bill} + ${bill * perc}tip)
    </div>
  );
}

export default Result;
