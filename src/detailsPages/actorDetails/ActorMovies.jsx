import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { Box, Skeleton, Stack } from '@mui/material';

import { cinemaImgStyles } from "../../Styles";

import MovieCard from "../../landing/MovieCard";

export default function ActorMovies() {
    const movies = useSelector((state) => {
        return state.cinemate?.actorCredits?.cast;
    });
    const isLoadingActorCredits = useSelector((state) => state.cinemate.isLoading.actorCredits);
    return (
        <Stack p={5}>
            <Stack direction='row' spacing={2} sx={{overflowX: 'scroll', scrollbarWidth: 'none',}}>
                {movies?.slice(0, 10)?.map((movie) => {
                    return (
                        isLoadingActorCredits
                        ?
                        <Box sx={{ height: '280px', aspectRatio: 2 / 3, }}>
                            <Skeleton variant="rounded" sx={cinemaImgStyles}/>
                        </Box>
                        :
                        <Box 
                            key={`${movie.id}-${movie.media_type}`}   
                            sx={{
                                height: '280px',
                                aspectRatio: 2 / 3,
                            }}
                            component={Link}
                            to={`/cinema/${movie.media_type}/${movie.id}`}
                        >
                            <MovieCard src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                        </Box>
                    )
                })}
            </Stack>
        </Stack>
    )
}