import { configureStore } from '@reduxjs/toolkit';
import cinemateReducer from './cinemateSlice';

export const store = configureStore({
    reducer: {
        cinemate: cinemateReducer,
    }
})