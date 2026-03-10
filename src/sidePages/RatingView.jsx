import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { Box, Grid, Stack, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

import MovieCard from "../landing/MovieCard";

import { getAllRatings } from "../utils/ratingStorage";

export default function RatingView() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        setMovies(getAllRatings());
    }, [])
    if(movies.length === 0) {
        return (
            <Typography color="text.primary" mt={10} textAlign='center' variant="h1">
                No rated titles yet
            </Typography>
        )
    }
    else {
        return (
            <Grid container spacing={4} p={5}>
                {movies?.map((movie) => {
                    return (
                        <Grid size={{xs: 12, sm: 6, md: 4, lg: 2}} mb={4} key={`${movie.id}-${movie.mediaType}`} >
                            <Box 
                                sx={{
                                    height: '280px',
                                    aspectRatio: 2 / 3,
                                    textDecoration: 'none',
                                }}
                                component={Link}
                                to={`/cinema/${movie.mediaType}/${movie.id}`}
                            >
                                <MovieCard src={`https://image.tmdb.org/t/p/w500/${movie.poster}`} />
                                <Stack direction='row' alignItems='center' justifyContent='center' spacing={1} p={1}>
                                    <StarIcon fontSize='large' sx={{color: "#FFD700"}}/>
                                    <Typography variant="h5" sx={{color: 'text.primary'}}>{movie.rating}/10</Typography>
                                </Stack>
                            </Box>
                        </Grid>
                    )
                })}
            </Grid>
        ) 
    }
} 