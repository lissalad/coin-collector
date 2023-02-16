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
  },
});

export const { addCoin } = coinsSlice.actions;
export default coinsSlice.reducer;
