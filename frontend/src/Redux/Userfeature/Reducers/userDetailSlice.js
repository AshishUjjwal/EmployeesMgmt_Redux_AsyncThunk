import { createSlice } from "@reduxjs/toolkit";
import { createUser } from "../Actions/createUserAction";
import { showUser } from "../Actions/showUserAction";
import { deleteUser } from "../Actions/deleteUserAction";
import { updateUser } from "../Actions/updateUserAction";

export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null,
        searchData: [],
    },

    reducer: {
        searchUser: (state, action)=>{
            console.log(action.payload);
            state.searchData = action.payload;
        },
    },

    extraReducers : (builder)=>{
      builder
        // Create User
        .addCase(createUser.pending, (state)=> state.loading = true)
        .addCase(createUser.fulfilled, (state, action)=> {
            state.loading = false;
            state.users.push(action.payload);
        })
        .addCase(createUser.rejected, (state,action)=> {
            state.loading = false;
            state.error = action.payload.message;
        })

        // Show Users
        .addCase(showUser.pending, (state)=> state.loading = true)
        .addCase(showUser.rejected, (state, action)=>{
            state.loading = false;
            state.users = action.payload;
        })
        .addCase(showUser,rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })

        // Delete User
        .addCase(deleteUser.pending, (state)=>{
            state.loading = true;
        })
        .addCase(deleteUser.fulfilled, (state, action) => {
            state.loading = false;
            const { id } = action.payload;
            if (id) {
              state.users = state.users.filter((ele) => ele.id !== id);
            }
        })
        .addCase(deleteUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    
          // Update User
        .addCase(updateUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = state.users.map((ele) =>
              ele.id === action.payload.id ? action.payload : ele
            );
        })
        .addCase(updateUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        });
    },
});
    
export default userDetail.reducer;
export const { searchUser } = userDetail.actions;

// ✅ userDetail.reducer → For store configuration (manages state updates).
// ✅ userDetail.actions → For dispatching actions (triggers state changes).

