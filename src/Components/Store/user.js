import { createSlice } from "@reduxjs/toolkit";

const userInitailState = {users:[]}
const usersSlice = createSlice({
    name: "users",
    initialState: userInitailState,
    reducers: {
        createUser(state,action){
            state.users.push(action.payload);
        },
        findUser(state, action){
            return state.users.find(user => user.id === action.payload.id);
        }
    }
});

export default usersSlice;