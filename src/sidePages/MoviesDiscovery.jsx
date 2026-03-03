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
    const movieRowArr = [
        {id: 1, sectionLabel: 'Popular Now', movies: popularCinema, mediaType: 'movie'},
        {id: 2, sectionLabel: 'Top Rated', movies: topRatedCinema, mediaType: 'movie'},
        {id: 3, sectionLabel: 'Upcoming', movies: upcomingCinema, mediaType: 'movie'},
        {id: 4, sectionLabel: 'Now Playing', movies: nowPlayingCinema, mediaType: 'movie'}
    ];
    return (
        <Stack p={5}>
            <MovieRow movieRowArr={movieRowArr}/>
        </Stack>
    )
}