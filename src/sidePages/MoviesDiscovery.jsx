import Stack from "@mui/material/Stack";
import MovieRow from "../landing/MovieRow";
import { useSelector } from "react-redux";
export default function MoviesDisovery() {
    const popularCinema = useSelector((state) => {
        return state.cinemate.movies['popular'];
    });
    const topRatedCinema = useSelector((state) => {
        return state.cinemate.movies['topRated'];
    });
    const upcomingCinema = useSelector((state) => {
        return state.cinemate.movies['upcoming'];
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