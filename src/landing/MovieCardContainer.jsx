import Stack from "@mui/material/Stack";
import MovieCard from "./MovieCard";

export default function MovieCardContainer({movies = []}) {
    return (
        <Stack direction='row' spacing={2} sx={{overflowX: 'scroll', scrollbarWidth: 'none',}}>
            {movies?.map((top) => {
                return <MovieCard key={top.id} src={`https://image.tmdb.org/t/p/w500/${top.poster_path}`} />
            })}
        </Stack>
    )
}