import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTopRatedApi = createAsyncThunk("topRatedThunkFunction", async (url) => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
        }
    });
    if (!response.ok) {
        throw new Error('TMDB fetch failed');
    }
    return response.json();
});
export const fetchPopularApi = createAsyncThunk("popularThunkFunction", async (url) => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
        }
    });
    if (!response.ok) {
        throw new Error('TMDB fetch failed');
    }
    return response.json();
});
export const fetchUpcomingApi = createAsyncThunk("upcomingThunkFunction", async (url) => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
        }
    });
    if (!response.ok) {
        throw new Error('TMDB fetch failed');
    }
    return response.json();
});
const cinemateSlice = createSlice({
    name: 'cinemate',
    initialState: {
        popular: [],
        topRated: [],
        upcoming: [],
    },
    reducers: {
    },
    extraReducers(builder) {
        builder
        .addCase(fetchTopRatedApi.fulfilled, (state, action) => {
            state.topRated = action.payload;
        })
        .addCase(fetchPopularApi.fulfilled, (state, action) => {
            state.popular = action.payload;
        })
        .addCase(fetchUpcomingApi.fulfilled, (state, action) => {
            state.upcoming = action.payload;
        })
    }
});

export const { cinemateFetch } = cinemateSlice.actions;
export default cinemateSlice.reducer;