import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeCoin } from "../features/coins/coinsSlice";
import { motion, AnimatePresence } from "framer-motion";

import Coin from "./Coin";

export default function CoinList() {
  const coins = useSelector((state) => state.coins.value);
  const dispatch = useDispatch();

  console.log(coins);
  // const [editMode, setEditMode] = useState(false);

  return (
    <div className="coin-collection">
      <div className="collection-header">
        <h1>Your Collection</h1>
      </div>
      <div className="coin-list">
        <AnimatePresence>
          {coins.map((coin, i) => (
            <motion.li
              key={coin.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1.0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="coin-container"
            >
              <Coin coin={coin} />
              <button
                className="x-button"
                onClick={() => dispatch(removeCoin(i))}
              >
                x
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
