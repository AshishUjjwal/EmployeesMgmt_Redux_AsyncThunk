import { createAsyncThunk } from "@reduxjs/toolkit";

// Delete User Action
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://67dba8da1fd9e43fe47550bf.mockapi.io/user/${id}`,
      { method: "DELETE" }
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
