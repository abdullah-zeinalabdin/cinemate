import Stack from "@mui/material/Stack";
import MovieCard from "./MovieCard";

export default function MovieCardContainer() {
    return (
        <Stack direction='row' spacing={2} sx={{overflowX: 'scroll', scrollbarWidth: 'none',}}>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </Stack>
    )
}