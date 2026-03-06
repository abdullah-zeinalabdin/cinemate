import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import RatingModal from "./RatingModal";
export default function RatingBlock({label, variant = 'default', icon: Icon, ratingLabel, iconVariant = 'iconDefault'}) {
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(null);
    const handleOpen = () => {setOpen(true)};
    const handleClose = () => {setOpen(false)};
    const styles = {
        default: {},
        interactive: {
            cursor: 'pointer',
            transition: 'all ease 0.3s',
            borderRadius: '6px',
            '&:hover' : {
                bgcolor: 'rgba(255, 215, 0, 0.08)'
            }
        },
        iconDefault: {color: '#FFD700'},
        iconInteractive: {
            color: '#FFD700',
            transition: 'all ease 0.3s',
            '&:hover': {
                color: '#FFC107',
            }
        }
    };
    const { id, mediaType } = useParams();
    const poster = useSelector((state) => state.cinemate?.cinemaDetails?.poster_path);
    /* Local Storage */
    const storedRatings = JSON.parse(localStorage.getItem("ratings")) || [];
    const existingRating = storedRatings.findIndex((item) => item.id === id);
    function handleRatingClick(rating) {
        const ratingObj = {
            id: id,
            poster: poster,
            mediaType: mediaType,
            rating: rating,
        }
        if (existingRating !== -1) {
        storedRatings[existingRating].rating = rating;
        }else {
            storedRatings.push(ratingObj);
        }
        localStorage.setItem("ratings", JSON.stringify(storedRatings));
    }
    /* === Local Storage === */
    return (
        <>
            <Stack color='text.primary' spacing={1} alignItems='center' onClick={handleOpen}>
                <Typography color="text.secondary" textAlign='center'>{label}</Typography>
                <Stack direction='row' alignItems='center' spacing={1} p={1} sx={styles[variant]}>
                    <Icon fontSize='large' sx={styles[iconVariant]}/>
                    <Typography variant="h5" color="text.primary">{ratingLabel}</Typography>
                </Stack>
            </Stack>
            <RatingModal open={open} handleClose={handleClose} setRating={setRating} handleRatingClick={handleRatingClick}/>
        </>
    )
}