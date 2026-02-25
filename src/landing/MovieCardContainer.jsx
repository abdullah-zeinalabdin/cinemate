import Stack from "@mui/material/Stack";
import MovieCard from "./MovieCard";
import Box from "@mui/material/Box";

export default function MovieCardContainer({movies = []}) {
    return (
        <Stack direction='row' spacing={2} sx={{overflowX: 'scroll', scrollbarWidth: 'none',}}>
            {movies?.map((top) => {
                return (
                    <Box 
                        key={top.id}   
                        sx={{
                            height: '280px',
                            aspectRatio: 2 / 3,
                        }}
                    >
                        <MovieCard src={`https://image.tmdb.org/t/p/w500/${top.poster_path}`} />
                    </Box>
                )
            })}
        </Stack>
    )
}