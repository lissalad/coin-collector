import { createSlice } from "@reduxjs/toolkit"; // 1

// 2
const initialState = {
  value: [],
};

// 3 Add the password slice
export const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    addCoin: (state, action) => {
      state.value.push(action.payload);
    },
    // reset: (state) => {
    //   state.coins
    // }
    removeCoin: (state, action) => {
      console.log(state.coins);
      const coinID = action.payload;
      state.value.splice(coinID, 1);
      // state.coins = state.coins.filter((coin) => coin !== coinID);
    },
  },
});

export const { addCoin, removeCoin } = coinsSlice.actions;
export default coinsSlice.reducer;
