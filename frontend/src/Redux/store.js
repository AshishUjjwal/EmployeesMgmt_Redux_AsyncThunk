import { configureStore } from "@reduxjs/toolkit";
import userDetail from "./features/Userfeature/userSlice";

export const store = configureStore({
  reducer: {
    app: userDetail,
  },
});