import { configureStore } from "@reduxjs/toolkit";
import userDetail from "./Userfeature/Reducers/userDetailSlice.js";

export const store = configureStore({
  reducer: {
    app: userDetail,
  },
});