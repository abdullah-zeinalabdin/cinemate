import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchCinemaDataObj } from "../../redux/cinemateSlice";

import { useParams } from "react-router-dom";

import { Box, Stack } from "@mui/material";

import { heroBackdropStyles } from "../../Styles";

import CinemaOverview from "./CinemaOveview";
import CastContainer from "../castDetails/CastContainer";
import GlobalError from "../../GlobalError";

export default function CinemaDetailsPage() {
    const {mediaType, id} = useParams();
    const dispatch = useDispatch();
    const isRejectedDetails = useSelector((state) => state.cinemate.isRejected.cinemaDetails);
    const isRejectedCast = useSelector((state) => state.cinemate.isRejected.castDetails)
    useEffect(() => {
        dispatch(fetchCinemaDataObj({url: `https://api.themoviedb.org/3/${mediaType}/${id}`, key: 'cinemaDetails'}));
        dispatch(fetchCinemaDataObj({url: `https://api.themoviedb.org/3/${mediaType}/${id}/credits`, key: 'castDetails'}));
    }, [dispatch, mediaType, id]);
    const details = useSelector((state) => {
        return state.cinemate.cinemaDetails;
    });
    return (
        <Stack>
            {
                isRejectedDetails
                ?
                <GlobalError />
                :
                <Box sx={heroBackdropStyles(details.backdrop_path)}>
                    <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.8)' }} /> 
                    <CinemaOverview />
                </Box>
            }
            <Stack>
                {
                    isRejectedCast
                    ?
                    <GlobalError />
                    :
                    <CastContainer />
                }
            </Stack>
        </Stack>
    )
}