import { createAsyncThunk } from "@reduxjs/toolkit";

// Show User Action
export const showUser = createAsyncThunk(
  "showUser",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      "https://641dd63d945125fff3d75742.mockapi.io/crud"
    );

    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
