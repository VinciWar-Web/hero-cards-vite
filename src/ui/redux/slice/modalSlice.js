import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    modalHero: false
}

export const modalSlice = createSlice({
    name: 'hero',
    initialState,

    reducers: {
        setHeroModal: (state, action) => {
            state.modalHero = action.payload
        },
    },
})

export const { setHeroModal } = modalSlice.actions