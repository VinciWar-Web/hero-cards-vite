import { combineReducers } from '@reduxjs/toolkit'

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

import { heroSlice } from './slice/heroSlice'
import { spinnerSlice } from './slice/spinnerSlice'
import { modalSlice } from './slice/modalSlice'

const persistConfig = {
    key: "root",
    version: 1, 
    storage
}

/* Insertar todos los Slice AQUI*/
const reducer = combineReducers({
    heros: heroSlice.reducer,
    spinner: spinnerSlice.reducer,
    modal: modalSlice.reducer
})


const persistedReducer = persistReducer( persistConfig,  reducer)

export default persistedReducer
