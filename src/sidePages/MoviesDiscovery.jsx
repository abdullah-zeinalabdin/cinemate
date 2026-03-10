import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchCinemaDataArr } from "../redux/cinemateSlice";

import Stack from "@mui/material/Stack";

import MovieRow from "../landing/MovieRow";

export default function MoviesDiscovery() {
    const dispatch = useDispatch();
    const topRatedCinema = useSelector((state) => {
        return state.cinemate?.movies['topRated'];
    });
    const upcomingCinema = useSelector((state) => {
        return state.cinemate?.movies['upcoming'];
    });
    useEffect(() => {
        if(!topRatedCinema.length) {
            dispatch(fetchCinemaDataArr({url: `https://api.themoviedb.org/3/movie/top_rated`, key: 'topRated', mediaType: 'movies'}));
        }
        if(!upcomingCinema.length) {
            dispatch(fetchCinemaDataArr({url: `https://api.themoviedb.org/3/movie/upcoming`, key: 'upcoming', mediaType: 'movies'}));
        }
        dispatch(fetchCinemaDataArr({url: `https://api.themoviedb.org/3/movie/now_playing`, key: 'nowPlaying', mediaType: 'movies'}));
        dispatch(fetchCinemaDataArr({url: `https://api.themoviedb.org/3/movie/popular`, key: 'popular', mediaType: 'movies'}));
    }, [dispatch, topRatedCinema.length, upcomingCinema.length])
    const popularCinema = useSelector((state) => {
        return state.cinemate.movies['popular'];
    });
    const nowPlayingCinema = useSelector((state) => {
        return state.cinemate.movies['nowPlaying'];
    });
    const isLoadingPopularmovies = useSelector((state) => state.cinemate.isLoading.popularmovies);
    const isLoadingTopRatedmovies = useSelector((state) => state.cinemate.isLoading.topRatedmovies);
    const isLoadingUpcomingmovies = useSelector((state) => state.cinemate.isLoading.upcomingmovies);
    const isLoadingNowPlayingmovies = useSelector((state) => state.cinemate.isLoading.nowPlayingmovies);
    const isRejectedPopularmovies = useSelector((state) => state.cinemate.isRejected.popularmovies);
    const isRejectedTopRatedmovies = useSelector((state) => state.cinemate.isRejected.topRatedmovies);
    const isRejectedUpcomingmovies = useSelector((state) => state.cinemate.isRejected.upcomingmovies);
    const isRejectedNowPlayingmovies = useSelector((state) => state.cinemate.isRejected.nowPlayingmovies);
    const movieRowArr = [
        {id: 1, sectionLabel: 'Popular Now', movies: popularCinema, mediaType: 'movie', isLoading: isLoadingPopularmovies, isRejected: isRejectedPopularmovies},
        {id: 2, sectionLabel: 'Top Rated', movies: topRatedCinema, mediaType: 'movie', isLoading: isLoadingTopRatedmovies, isRejected: isRejectedTopRatedmovies},
        {id: 3, sectionLabel: 'Upcoming', movies: upcomingCinema, mediaType: 'movie', isLoading: isLoadingUpcomingmovies, isRejected: isRejectedUpcomingmovies},
        {id: 4, sectionLabel: 'Now Playing', movies: nowPlayingCinema, mediaType: 'movie', isLoading: isLoadingNowPlayingmovies, isRejected: isRejectedNowPlayingmovies}
    ];
    return (
        <Stack p={5}>
            <MovieRow movieRowArr={movieRowArr}/>
        </Stack>
    )
}