import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/AuthSlice";
import { CurrencyReducer } from "./slices/CurrencySlice";
import { LanguageReducer } from "./slices/LanguageSlice";

const reducer = {
    auth: authReducer,
    language: LanguageReducer,
    currency: CurrencyReducer
}

export const store = configureStore({reducer})