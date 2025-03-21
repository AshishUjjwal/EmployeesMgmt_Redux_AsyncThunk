import { createAsyncThunk } from "@reduxjs/toolkit";

// Show User Action
export const showUser = createAsyncThunk(
  "showUser",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      "https://67dba8da1fd9e43fe47550bf.mockapi.io/user"
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
