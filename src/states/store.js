import { configureStore } from "@reduxjs/toolkit";
import burgerMenuReducer from "./burgerMenu";

export const store = configureStore({
  reducer: {
    burgerMenuState: burgerMenuReducer,
  },
});
