import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./loginSlice"

const store = configureStore({
  reducer : { authentication : authSlice }
});

export default store;