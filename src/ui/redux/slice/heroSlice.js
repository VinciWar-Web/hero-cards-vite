import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    herosAll: [],
    hero: []
}

export const heroSlice = createSlice({
    name: 'hero',
    initialState,

    reducers: {
        setHeroAll: (state, action) => {
            state.herosAll = action.payload
        },
        setHero: (state, action) => {
            state.hero = action.payload
        },
    },
})

export const { setHeroAll, setHero } = heroSlice.actions
