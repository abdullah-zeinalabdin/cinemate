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

        isLoading: {
            topRatedTV: false,
            popularTV: false,
            onTheAirTV: false,
            airingTodayTV: false,

            topRatedmovies: false,
            popularmovies: false,
            upcomingmovies: false,
            nowPlayingmovies: false,

            listsearch: false,

            cinemaDetails: false,
            castDetails: false,
            actorDetails: false,
            actorCredits: false,
        },
    },
    reducers: {
    },
    extraReducers(builder) {
        builder
        .addCase(fetchCinemaDataArr.fulfilled, (state, action) => {
            const { data, key, mediaType } = action.payload;
            state[mediaType][key] = data;
            const loadingKey = `${key}${mediaType}`;
            state.isLoading[loadingKey] = false;
        })
        .addCase(fetchCinemaDataObj.fulfilled, (state, action) => {
            const { data, key } = action.payload;
            state[key] = data;
            const loadingKey = `${key}`;
            state.isLoading[loadingKey] = false;
        })
        .addCase(fetchCinemaDataArr.pending, (state, action) => {
            const { key, mediaType } = action.meta.arg;
            const loadingKey = `${key}${mediaType}`;
            state.isLoading[loadingKey] = true;
        })
        .addCase(fetchCinemaDataObj.pending, (state, action) => {
            const { key } = action.meta.arg;
            const loadingKey = `${key}`;
            state.isLoading[loadingKey] = true;
        })
    }
});

export const { cinemateFetch } = cinemateSlice.actions;
export default cinemateSlice.reducer;