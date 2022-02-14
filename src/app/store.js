import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/bascketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
