import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    spinner: false
}

export const spinnerSlice = createSlice({
    name: 'spinner',
    initialState,

    reducers: {
        startSpinner: (state, action) => {
            state.spinner = action.payload
        },
    },
})

export const { startSpinner } = spinnerSlice.actions
