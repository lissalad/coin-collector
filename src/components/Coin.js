import { motion, AnimatePresence } from "framer-motion";

export default function Coin(props) {
  const { type, year, mint } = props.coin;

  return (
    // <motion.div

    //   className="coin"
    // >
    <div className="coin">
      <h1>
        {year} {mint}
      </h1>
    </div>
    // </motion.div>
  );
}
