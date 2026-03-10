import { useState } from "react";

import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import { Skeleton, Stack, Typography } from "@mui/material";

import { ratingBlocksStyles } from "../../Styles";

import RatingModal from "./RatingModal";

import { getAllRatings, saveRating } from "../../utils/ratingStorage";

export default function RatingBlock({label, variant = 'default', icon: Icon, ratingLabel, iconVariant = 'iconDefault'}) {
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(null);
    const handleOpen = () => {setOpen(true)};
    const handleClose = () => {setOpen(false)};
    const { id, mediaType } = useParams();
    const poster = useSelector((state) => state.cinemate?.cinemaDetails?.poster_path);
    const isLoadingDetails = useSelector((state) => state.cinemate.isLoading.cinemaDetails);
    /* Local Storage */
    const existingRating = getAllRatings().find((item) => item.id === id);
    function handleRatingClick(rating) {
        saveRating({id, poster, mediaType, rating: rating})
    }
    /* === Local Storage === */
    const displayLabel = variant === 'interactive' && existingRating ? `${existingRating.rating}/10` : ratingLabel;
    return (
        <>
            <Stack color='text.primary' spacing={1} alignItems='center' onClick={variant === 'interactive' ? handleOpen : null}>
                <Typography color="text.secondary" textAlign='center'>{label}</Typography>
                <Stack direction='row' alignItems='center' spacing={1} p={1} sx={ratingBlocksStyles[variant]}>
                    <Icon fontSize='large' sx={ratingBlocksStyles[iconVariant]}/>
                    {(
                        isLoadingDetails 
                        ?
                        <Skeleton variant="text" width='100%' sx={{fontSize: '2rem'}} />
                        :
                        <Typography variant="h5" color="text.primary">{displayLabel}</Typography>
                    )}
                </Stack>
            </Stack>
            <RatingModal open={open} handleClose={handleClose} setRating={setRating} handleRatingClick={handleRatingClick}/>
        </>
    )
}