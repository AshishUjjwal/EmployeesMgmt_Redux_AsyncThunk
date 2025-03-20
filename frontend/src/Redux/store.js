import { configureStore } from "@reduxjs/toolkit";
import userDetail from "./Userfeature/Reducers/userDetailSlice";

export const store = configureStore({
  reducer: {
    app: userDetail,
  },
});