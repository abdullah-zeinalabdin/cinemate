/* MUI Imports */
import Stack from "@mui/material/Stack";
/* === MUI Imports === */
import SearchBar from "../search/SearchBar";
import MovieRow from "./MovieRow";
/* Redux Imports */
import { useDispatch, useSelector} from 'react-redux';
import { fetchTopRatedMoviesApi, fetchPopularMoviesApi, fetchUpcomingMoviesApi, fetchNowPlayingMoviesApi, fetchPopularTVApi, fetchAiringTodayTVApi, fetchOnTheAirTVApi, fetchTopRatedTVApi } from "../redux/cinemateSlice";
import { useEffect } from "react";
/* === Redux Imports === */

export default function Landing() {
    const popularCinema = useSelector((state) => {
        return state.cinemate.TV['popular'];
    });
    const topRatedCinema = useSelector((state) => {
        return state.cinemate.movies['topRated'];
    });
    const upcomingCinema = useSelector((state) => {
        return state.cinemate.movies['upcoming'];
    });
    const movieRowArr = [
        {id: 1, sectionLabel: 'Popular Now', movies: popularCinema},
        {id: 2, sectionLabel: 'Top Rated', movies: topRatedCinema},
        {id: 3, sectionLabel: 'Upcoming', movies: upcomingCinema},
    ];
    const dispatch = useDispatch();
    useEffect(() => {
        /* Movies */
        dispatch(fetchTopRatedMoviesApi(`https://api.themoviedb.org/3/movie/top_rated`));
        dispatch(fetchUpcomingMoviesApi(`https://api.themoviedb.org/3/movie/upcoming`));
        dispatch(fetchNowPlayingMoviesApi(`https://api.themoviedb.org/3/movie/now_playing`));
        dispatch(fetchPopularMoviesApi(`https://api.themoviedb.org/3/movie/popular`));
        /* === Movies === */
        /* TV */
        dispatch(fetchPopularTVApi(`https://api.themoviedb.org/3/tv/popular`));
        dispatch(fetchAiringTodayTVApi(`https://api.themoviedb.org/3/tv/airing_today`));
        dispatch(fetchOnTheAirTVApi(`https://api.themoviedb.org/3/tv/on_the_air`));
        dispatch(fetchTopRatedTVApi(`https://api.themoviedb.org/3/tv/top_rated`));
        /* === TV === */
    }, [dispatch]);
    return (
        <Stack direction='column' p={5}>
            <SearchBar />
            <MovieRow movieRowArr={movieRowArr}/>
        </Stack>
    )
}