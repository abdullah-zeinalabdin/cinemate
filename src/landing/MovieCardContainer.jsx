import Stack from "@mui/material/Stack";
import MovieCard from "./MovieCard";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Skeleton from '@mui/material/Skeleton';
import GlobalError from "../GlobalError";
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