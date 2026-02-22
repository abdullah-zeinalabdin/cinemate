import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MovieCardContainer from "./MovieCardContainer";
export default function MovieRow() {

    return (
        <Stack direction='column' spacing={2}>
            <Typography variant="h3" color="text.primary">
                Popular Now
            </Typography>
            <MovieCardContainer />
            <Typography variant="h3" color="text.primary">
                Trending Now
            </Typography>
            <MovieCardContainer />
            <Typography variant="h3" color="text.primary">
                Upcoming
            </Typography>
            <MovieCardContainer />
        </Stack>
    )
}