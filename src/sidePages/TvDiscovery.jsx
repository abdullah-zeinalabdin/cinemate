import Stack from "@mui/material/Stack";
import MovieRow from "../landing/MovieRow";
import { useSelector } from "react-redux";
export default function MoviesDisovery() {
    const popularCinema = useSelector((state) => {
        return state.cinemate.TV['popular'];
    });
    const topRatedCinema = useSelector((state) => {
        return state.cinemate.TV['topRated'];
    });
    const onTheAirCinema = useSelector((state) => {
        return state.cinemate.TV['onTheAir'];
    });
    const airingTodayCinema = useSelector((state) => {
        return state.cinemate.TV['airingToday'];
    });
    const movieRowArr = [
        {id: 1, sectionLabel: 'Popular Now', movies: popularCinema},
        {id: 2, sectionLabel: 'Top Rated', movies: topRatedCinema},
        {id: 3, sectionLabel: 'On The Air', movies: onTheAirCinema},
        {id: 4, sectionLabel: 'Airing Today', movies: airingTodayCinema}
    ];
    return (
        <Stack p={5}>
            <MovieRow movieRowArr={movieRowArr}/>
        </Stack>
    )
}