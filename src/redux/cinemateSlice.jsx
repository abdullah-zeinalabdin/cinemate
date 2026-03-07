import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
/* Generic Thunk */
export const fetchCinemaDataArr = createAsyncThunk("cinemaDataArrThunkFunction", async ({url, key, mediaType}) => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
        }
    });
    if (!response.ok) {
        throw new Error('TMDB fetch failed');
    }
    const data = await response.json();
    return{ data: data.results, key, mediaType}
});
export const fetchCinemaDataObj = createAsyncThunk("cinemaDataObjThunkFunction", async ({url, key}) => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
        }
    });
    if (!response.ok) {
        throw new Error('TMDB fetch failed');
    }
    const data = await response.json();
    return{ data: data, key }
});
/* === Generic Thunk === */
const cinemateSlice = createSlice({
    name: 'cinemate',
    initialState: {
        TV: {
            topRated: [],
            popular: [],
            onTheAir: [],
            airingToday: [],
        },
        movies: {
            topRated: [],
            popular: [],
            upcoming: [],
            nowPlaying: [],
        },
        search: {
            list: [],
        },
        cinemaDetails: {},
        castDetails: {},
        actorDetails: {},
        actorCredits: {},
    },
    reducers: {
    },
    extraReducers(builder) {
        builder
        .addCase(fetchCinemaDataArr.fulfilled, (state, action) => {
            const { data, key, mediaType } = action.payload;
            state[mediaType][key] = data;
        })
        .addCase(fetchCinemaDataObj.fulfilled, (state, action) => {
            const { data, key } = action.payload;
            state[key] = data;
        })
    }
});

export const { cinemateFetch } = cinemateSlice.actions;
export default cinemateSlice.reducer;