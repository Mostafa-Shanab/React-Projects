function Service({ mypercent, setMypercent, children }) {
  return (
    <div>
      {children}
      <select
        name="percnet"
        value={mypercent}
        onChange={(e) => setMypercent(Number(e.target.value))}
      >
        <option value="5">5%</option>
        <option value="10">10%</option>
        <option value="15">15%</option>
        <option value="20">20%</option>
      </select>
    </div>
  );
}

export default Service;
