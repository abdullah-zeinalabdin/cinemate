import { useEffect } from "react";

import { useDispatch, useSelector} from 'react-redux';
import { fetchCinemaDataArr } from "../redux/cinemateSlice";

import Stack from "@mui/material/Stack";

import MovieRow from "./MovieRow";
import SearchBar from "../search/SearchBar";

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
    const isLoadingPopularTV = useSelector((state) => state.cinemate.isLoading.popularTV);
    const isLoadingTopRatedmovies = useSelector((state) => state.cinemate.isLoading.topRatedmovies);
    const isLoadingUpcomingmovies = useSelector((state) => state.cinemate.isLoading.upcomingmovies);
    const isRejectedPopularTV = useSelector((state) => state.cinemate.isRejected.popularTV);
    const isRejectedTopRatedmovies = useSelector((state) => state.cinemate.isRejected.topRatedmovies);
    const isRejectedUpcomingmovies = useSelector((state) => state.cinemate.isRejected.upcomingmovies);
    const movieRowArr = [
        {id: 1, sectionLabel: 'Popular Now', movies: popularCinema, mediaType: 'tv', isLoading: isLoadingPopularTV, isRejected: isRejectedPopularTV  },
        {id: 2, sectionLabel: 'Top Rated', movies: topRatedCinema, mediaType: 'movie', isLoading: isLoadingTopRatedmovies, isRejected: isRejectedTopRatedmovies},
        {id: 3, sectionLabel: 'Upcoming', movies: upcomingCinema, mediaType: 'movie', isLoading: isLoadingUpcomingmovies, isRejected: isRejectedUpcomingmovies},
    ];
    const dispatch = useDispatch();
    useEffect(() => {
        /* Movies */
        dispatch(fetchCinemaDataArr({url: `https://api.themoviedb.org/3/movie/top_rated`, key: 'topRated', mediaType: 'movies'}));
        dispatch(fetchCinemaDataArr({url: `https://api.themoviedb.org/3/movie/upcoming`, key: 'upcoming', mediaType: 'movies'}));
        /* === Movies === */
        /* TV */
        dispatch(fetchCinemaDataArr({url: `https://api.themoviedb.org/3/tv/popular`, key: 'popular', mediaType: 'TV'}));
        /* === TV === */
    }, [dispatch]);
    return (
        <Stack direction='column' p={5}>
            <SearchBar />
            <MovieRow movieRowArr={movieRowArr}/>
        </Stack>
    )
}