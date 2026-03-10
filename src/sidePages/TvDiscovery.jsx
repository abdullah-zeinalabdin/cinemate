import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchCinemaDataArr } from "../redux/cinemateSlice";

import Stack from "@mui/material/Stack";

import MovieRow from "../landing/MovieRow";

export default function MoviesDisovery() {
    const dispatch = useDispatch();
    const popularCinema = useSelector((state) => {
        return state.cinemate?.TV['popular'];
    });
    useEffect(() => {
        if(!popularCinema.length) {
            dispatch((fetchCinemaDataArr({url: `https://api.themoviedb.org/3/tv/popular`, key: 'popular', mediaType: 'TV'})))
        }
        dispatch(fetchCinemaDataArr({url: `https://api.themoviedb.org/3/tv/airing_today`, key: 'airingToday', mediaType: 'TV'}));
        dispatch(fetchCinemaDataArr({url: `https://api.themoviedb.org/3/tv/on_the_air`, key: 'onTheAir', mediaType: 'TV'}));
        dispatch(fetchCinemaDataArr({url: `https://api.themoviedb.org/3/tv/top_rated`, key: 'topRated', mediaType: 'TV'}));
    }, [dispatch, popularCinema.length])

    const topRatedCinema = useSelector((state) => {
        return state.cinemate.TV['topRated'];
    });
    const onTheAirCinema = useSelector((state) => {
        return state.cinemate.TV['onTheAir'];
    });
    const airingTodayCinema = useSelector((state) => {
        return state.cinemate.TV['airingToday'];
    });
    const isLoadingPopularTV = useSelector((state) => state.cinemate.isLoading.popularTV);
    const isLoadingTopRatedTV = useSelector((state) => state.cinemate.isLoading.topRatedTV);
    const isLoadingOnTheAirTV = useSelector((state) => state.cinemate.isLoading.onTheAirTV);
    const isLoadingAiringTodayTV = useSelector((state) => state.cinemate.isLoading.airingTodayTV);
    const isRejectedPopularTV = useSelector((state) => state.cinemate.isRejected.popularTV);
    const isRejectedTopRatedTV = useSelector((state) => state.cinemate.isRejected.topRatedTV);
    const isRejectedOnTheAirTV = useSelector((state) => state.cinemate.isRejected.onTheAirTV);
    const isRejectedAiringTodayTV = useSelector((state) => state.cinemate.isRejected.airingTodayTV);
    const movieRowArr = [
        {id: 1, sectionLabel: 'Popular Now', movies: popularCinema, mediaType: 'tv', isLoading: isLoadingPopularTV, isRejected: isRejectedPopularTV },
        {id: 2, sectionLabel: 'Top Rated', movies: topRatedCinema, mediaType: 'tv', isLoading: isLoadingTopRatedTV, isRejected: isRejectedTopRatedTV},
        {id: 3, sectionLabel: 'On The Air', movies: onTheAirCinema, mediaType: 'tv', isLoading: isLoadingOnTheAirTV, isRejected: isRejectedOnTheAirTV},
        {id: 4, sectionLabel: 'Airing Today', movies: airingTodayCinema, mediaType: 'tv', isLoading: isLoadingAiringTodayTV, isRejected: isRejectedAiringTodayTV}
    ];
    return (
        <Stack p={5}>
            <MovieRow movieRowArr={movieRowArr}/>
        </Stack>
    )
}