import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/AuthSlice";

const reducer = {
    auth: authReducer
}

export const store = configureStore({reducer})