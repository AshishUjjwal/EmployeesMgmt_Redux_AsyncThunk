import { createAsyncThunk } from "@reduxjs/toolkit";

// Show User Action
export const createUser = createAsyncThunk(
    "createUser",
    async (data, { rejectWithValue }) => {
        console.log("data", data);
        try {
            const response = await fetch(
                "https://67dba8da1fd9e43fe47550bf.mockapi.io/user",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                }
            );

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error.message || "Failed to create user");
        }
    }
);