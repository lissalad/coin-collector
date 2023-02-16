import { useState } from "react";

export default function CoinForm() {
  const [year, setYear] = useState();
  const [mint, setMint] = useState();

  return (
    <form className="coin-form">
      <h1>New Coin</h1>
      <label>
        Year
        <input
          type="number"
          maxLength={4}
          minLength={4}
          onChange={(e) => setYear(e.target.value)}
          value={year}
        />
      </label>
      <label>
        Mint
        <input
          type="text"
          maxLength={1}
          minLength={1}
          onChange={(e) => setMint(e.target.value)}
          value={mint}
        />
      </label>
    </form>
  );
}
