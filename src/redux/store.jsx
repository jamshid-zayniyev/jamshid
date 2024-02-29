import { configureStore } from "@reduxjs/toolkit";
import navbar from "./navbarSlice";

export const store = configureStore({
  reducer: {
    navbar,
  },
  devTools: process.env.NODE_ENV !== "production",
});