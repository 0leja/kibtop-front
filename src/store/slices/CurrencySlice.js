import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isOpen: false
}

const CurrencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        setOpenCurrencySelect(state, {payload}) {
            state.isOpen = payload.bool
        }
    }
})

export const CurrencyReducer = CurrencySlice.reducer;

export const {setOpenCurrencySelect} = CurrencySlice.actions;