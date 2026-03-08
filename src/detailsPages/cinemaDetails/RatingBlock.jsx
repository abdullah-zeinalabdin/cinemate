import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import RatingModal from "./RatingModal";
import { ratingBlocksStyles } from "../../Styles";
export default function RatingBlock({label, variant = 'default', icon: Icon, ratingLabel, iconVariant = 'iconDefault'}) {
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(null);
    const handleOpen = () => {setOpen(true)};
    const handleClose = () => {setOpen(false)};
    const { id, mediaType } = useParams();
    const poster = useSelector((state) => state.cinemate?.cinemaDetails?.poster_path)
    /* Local Storage */
    const storedRatings = JSON.parse(localStorage.getItem("ratings")) || [];
    const existingRating = storedRatings.find((item) => item.id === id);
    function handleRatingClick(rating) {
        const ratingObj = {
            id: id,
            poster: poster,
            mediaType: mediaType,
            rating: rating,
        }
        if (existingRating) {
            existingRating.rating = rating;
        }else {
            storedRatings.push(ratingObj);
        }
        localStorage.setItem("ratings", JSON.stringify(storedRatings));
    }
    /* === Local Storage === */
    const displayLabel = variant === 'interactive' && existingRating ? `${existingRating.rating}/10` : ratingLabel;
    return (
        <>
            <Stack color='text.primary' spacing={1} alignItems='center' onClick={variant === 'interactive' ? handleOpen : null}>
                <Typography color="text.secondary" textAlign='center'>{label}</Typography>
                <Stack direction='row' alignItems='center' spacing={1} p={1} sx={ratingBlocksStyles[variant]}>
                    <Icon fontSize='large' sx={ratingBlocksStyles[iconVariant]}/>
                    <Typography variant="h5" color="text.primary">{displayLabel}</Typography>
                </Stack>
            </Stack>
            <RatingModal open={open} handleClose={handleClose} setRating={setRating} handleRatingClick={handleRatingClick}/>
        </>
    )
}