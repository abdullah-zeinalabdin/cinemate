import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MovieCardContainer from "./MovieCardContainer";
import { useSelector } from "react-redux";
export default function MovieRow() {    
    const topRatedCinema = useSelector((state) => {
        return state.cinemate.topRated.results;
    });
    const popularCinema = useSelector((state) => {
        console.log(state.cinemate.popular.results);
        return state.cinemate.popular.results;
    });
    const upcomingCinema = useSelector((state) => {
        return state.cinemate.upcoming.results;
    });
    return (
        <Stack direction='column' spacing={2}>
            <Typography variant="h3" color="text.primary">
                Popular Now
            </Typography>
            <MovieCardContainer movies={popularCinema}/>
            <Typography variant="h3" color="text.primary">
                Top Rated
            </Typography>
            <MovieCardContainer movies={topRatedCinema}/>
            <Typography variant="h3" color="text.primary">
                Upcoming
            </Typography>
            <MovieCardContainer movies={upcomingCinema}/>
        </Stack>
    )
}