function BillInput({ bill, setBill }) {
  return (
    <div>
      <span>How Much was Bill? </span>{" "}
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}

export default BillInput;
