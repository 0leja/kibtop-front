import { createSlice } from "@reduxjs/toolkit";
import { AuthApi } from "../../services/AuthApi";


const initialState = {
    isAuthed: false,
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
            state.isAuthed = true;
        }
    }
});

export const authReducer = authSlice.reducer

export const {setAuth} = authSlice.actions

export const setAuthThunk = () => async dispatch => {
    AuthApi.auth().then(res => {
        dispatch(setAuth(res))
    })
}