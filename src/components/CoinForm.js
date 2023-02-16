import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCoin } from "../features/coins/coinsSlice";

export default function CoinForm() {
  const dispatch = useDispatch();

  const [coinType, setCoinType] = useState("penny");
  const [year, setYear] = useState(2023);
  const [mint, setMint] = useState("P");

  return (
    <form className="coin-form">
      <h1>New Coin</h1>
      <label>
        Coin
        <select onChange={(e) => setCoinType(e.target.value)} value={coinType}>
          <option value="penny">Penny</option>
          <option value="nickel">Nickel</option>
          <option value="dime">Dime</option>
          <option value="quarter">Quarter</option>
        </select>
      </label>
      <label>
        Year
        <input
          type="number"
          className="year-input"
          min="1793"
          max="2099"
          step="1"
          onChange={(e) => setYear(e.target.value)}
          placeholder="2023"
          defaultValue={2023}
          value={year}
        />
      </label>
      <label>
        Mint
        <select onChange={(e) => setMint(e.target.value)} value={mint}>
          <option value="p">P</option>
          <option value="d">D</option>
          <option value="s">S</option>
          {/* <option value="w">W</option> */}
        </select>
      </label>

      <button onClick={() => dispatch(addCoin({ coinType, year, mint }))}>
        Save
      </button>
    </form>
  );
}
