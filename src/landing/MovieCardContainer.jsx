import { Link } from "react-router-dom";

import { Box, Skeleton, Stack } from "@mui/material";

import GlobalError from "../GlobalError";
import MovieCard from "./MovieCard";

export default function MovieCardContainer({movies = [], mediaType, isLoading, isRejected}) {
    if(isRejected) {
        return <GlobalError />
    }
    else {
        return (
            <Stack direction='row' spacing={2} sx={{overflowX: 'scroll', scrollbarWidth: 'none',}}>
                {movies?.map((top) => {
                    return (
                        ( isLoading ? 
                        <Skeleton key={`${top.id}-${mediaType}`} variant="rounded" sx={{aspectRatio: 2/3,  height: '280px'}} /> 
                        :
                        <Box 
                            key={`${top.id}-${mediaType}`}   
                            sx={{
                                height: '280px',
                                aspectRatio: 2 / 3,
                            }}
                            component={Link}
                            to={`/cinema/${mediaType}/${top.id}`}
                        >
                            <MovieCard src={`https://image.tmdb.org/t/p/w500/${top.poster_path}`} />
                        </Box>)
                    )
                })}
            </Stack>
        )
    }
}