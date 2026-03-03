import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCinemaDetails } from "../../redux/cinemateSlice";
import { useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import CinemaOverview from "./CinemaOveview";
import Box from "@mui/material/Box";
export default function CinemaDetailsPage() {
    const {mediaType, id} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        mediaType === 'movie' ? dispatch(fetchCinemaDetails(`https://api.themoviedb.org/3/movie/${id}`)) : dispatch(fetchCinemaDetails(`https://api.themoviedb.org/3/tv/${id}`)) 
    }, [dispatch, mediaType, id]);
    const details = useSelector((state) => {
        return state.cinemate.cinemaDetails;
    });
    return (
        <Stack>
            <Box
            sx={{
                position: 'relative',
                minHeight: '70vh',
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${details.backdrop_path})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            >
                <Box 
                sx={{
                    position: 'absolute',
                    inset: 0,
                    bgcolor: 'rgba(0,0,0,0.8)'
                }}
                /> 
                <CinemaOverview />
            </Box>
        </Stack>
    )
}