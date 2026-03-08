import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCinemaDataObj } from "../../redux/cinemateSlice";
import { useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import CinemaOverview from "./CinemaOveview";
import Box from "@mui/material/Box";
import CastContainer from "../castDetails/CastContainer";
import { heroBackdropStyles } from "../../Styles";
export default function CinemaDetailsPage() {
    const {mediaType, id} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCinemaDataObj({url: `https://api.themoviedb.org/3/${mediaType}/${id}`, key: 'cinemaDetails'}));
        dispatch(fetchCinemaDataObj({url: `https://api.themoviedb.org/3/${mediaType}/${id}/credits`, key: 'castDetails'}));
    }, [dispatch, mediaType, id]);
    const details = useSelector((state) => {
        return state.cinemate.cinemaDetails;
    });
    return (
        <Stack>
            <Box sx={heroBackdropStyles(details.backdrop_path)}>
                <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.8)' }} /> 
                <CinemaOverview />
            </Box>
            <Stack>
                <CastContainer />
            </Stack>
        </Stack>
    )
}