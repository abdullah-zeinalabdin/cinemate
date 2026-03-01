import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
/* Movies Thunk */
export const fetchTopRatedMoviesApi = createAsyncThunk("topRatedMoviesThunkFunction", async (url) => {
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
    return data.results;
});
export const fetchUpcomingMoviesApi = createAsyncThunk("upcomingMoviesThunkFunction", async (url) => {
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
    return data.results;
});
export const fetchPopularMoviesApi = createAsyncThunk("popularMoviesThunkFunction", async (url) => {
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
    return data.results;
});
export const fetchNowPlayingMoviesApi = createAsyncThunk("nowPlayingMoviesThunkFunction", async (url) => {
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
    return data.results;
});
/* === Movies Thunk === */

/* TV Thunk */
export const fetchPopularTVApi = createAsyncThunk("popularTVThunkFunction", async (url) => {
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
    return data.results;
});
export const fetchTopRatedTVApi = createAsyncThunk("topRatedTVThunkFunction", async (url) => {
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
    return data.results;
});
export const fetchOnTheAirTVApi = createAsyncThunk("onTheAirTVThunkFunction", async (url) => {
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
    return data.results;
});
export const fetchAiringTodayTVApi = createAsyncThunk("airingTodayTVThunkFunction", async (url) => {
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
    return data.results;
});
/* === TV Thunk === */
/* Search Thunk */
export const fetchSearchResults = createAsyncThunk("resultsThunkFunction", async (url) => {
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
    return data.results;
});
/* === Search Thunk === */
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
    },
    reducers: {
    },
    extraReducers(builder) {
        builder
        .addCase(fetchTopRatedMoviesApi.fulfilled, (state, action) => {
            state.movies['topRated'] = action.payload;
        })
        .addCase(fetchUpcomingMoviesApi.fulfilled, (state, action) => {
            state.movies['upcoming'] = action.payload;
        })
        .addCase(fetchPopularMoviesApi.fulfilled, (state, action) => {
            state.movies['popular'] = action.payload;
        })
        .addCase(fetchNowPlayingMoviesApi.fulfilled, (state, action) => {
            state.movies['nowPlaying'] = action.payload;
        })
        .addCase(fetchPopularTVApi.fulfilled, (state, action) => {
            state.TV['popular'] = action.payload;
        })
        .addCase(fetchTopRatedTVApi.fulfilled, (state, action) => {
            state.TV['topRated'] = action.payload;
        })
        .addCase(fetchOnTheAirTVApi.fulfilled, (state, action) => {
            state.TV['onTheAir'] = action.payload;
        })
        .addCase(fetchAiringTodayTVApi.fulfilled, (state, action) => {
            state.TV['airingToday'] = action.payload;
        })
        .addCase(fetchSearchResults.fulfilled, (state, action) => {
            state.search['list'] = action.payload;
        })
    }
});

export const { cinemateFetch } = cinemateSlice.actions;
export default cinemateSlice.reducer;