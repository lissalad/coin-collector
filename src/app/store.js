import { saveState, loadState } from "./persistState";
import { configureStore } from "@reduxjs/toolkit";
import coinsReducer from "../features/coins/coinsSlice";
export const store = configureStore({
  reducer: {
    coins: coinsReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});
