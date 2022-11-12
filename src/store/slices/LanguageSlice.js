import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isOpen: false,
    language: localStorage.getItem('i18nextLng')
}

export const LanguageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setOpenLanguageSelect(state, {payload}) {
            state.isOpen = payload.bool
        },

        setLanguage(state, {payload}) {
            state.language = payload.language
        }
    }
});

export const {setLanguage, setOpenLanguageSelect} = LanguageSlice.actions;

export const LanguageReducer = LanguageSlice.reducer