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
    const isLoadingPopularTV = useSelector((state) => state.cinemate.isLoading.popularTV);
    const isLoadingTopRatedTV = useSelector((state) => state.cinemate.isLoading.topRatedTV);
    const isLoadingOnTheAirTV = useSelector((state) => state.cinemate.isLoading.onTheAirTV);
    const isLoadingAiringTodayTV = useSelector((state) => state.cinemate.isLoading.airingTodayTV);
    const movieRowArr = [
        {id: 1, sectionLabel: 'Popular Now', movies: popularCinema, mediaType: 'tv', isLoading: isLoadingPopularTV,},
        {id: 2, sectionLabel: 'Top Rated', movies: topRatedCinema, mediaType: 'tv', isLoading: isLoadingTopRatedTV,},
        {id: 3, sectionLabel: 'On The Air', movies: onTheAirCinema, mediaType: 'tv', isLoading: isLoadingOnTheAirTV,},
        {id: 4, sectionLabel: 'Airing Today', movies: airingTodayCinema, mediaType: 'tv', isLoading: isLoadingAiringTodayTV,}
    ];
    return (
        <Stack p={5}>
            <MovieRow movieRowArr={movieRowArr}/>
        </Stack>
    )
}