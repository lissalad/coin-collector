import { useSelector } from "react-redux";
import Coin from "./Coin";

export default function CoinList() {
  const coins = useSelector((state) => state.coins.value);

  // if (coins) {
  return (
    <ul className="coin-list">
      {coins.map((coin, i) => (
        <Coin key={i} coin={coin} />
      ))}
    </ul>
  );
  // }
}
