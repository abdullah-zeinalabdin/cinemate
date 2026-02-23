import { createSlice } from "@reduxjs/toolkit";


const cinemateSlice = createSlice({
    name: 'cinemate',
    initialState: {
        trending: [],
    },
    reducers: {
        fetchApi: (state, action) => {

        }
    }
});

export const { fetchApi } = cinemateSlice.actions;
export default cinemateSlice.reducer;