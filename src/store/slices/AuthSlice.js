import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLogin: false,
    userId: null,
    userName: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth(state, action) {
            const {userId, userName} = action.payload;


            state.userId = userId;
            state.userName = userName;
            state.isLogin = true;
        }
    }
});

export const authReducer = authSlice.reducer

export const {setAuth} = authSlice.actions