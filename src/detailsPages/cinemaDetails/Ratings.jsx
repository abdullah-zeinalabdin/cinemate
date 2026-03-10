import { useSelector } from "react-redux";

import Stack from "@mui/material/Stack";
import { Star, StarOutline } from "@mui/icons-material";

import RatingBlock from "./RatingBlock";

export default function Ratings() {
    const TMDBRating = useSelector((state) => state.cinemate?.cinemaDetails?.vote_average);
    return (
        <Stack direction='row' spacing={3} mb={5}> 
            <RatingBlock label='TMDB Rating' icon={Star} ratingLabel={`${TMDBRating?.toFixed(1)}/10`}/>
            <RatingBlock label='Your Rating' variant="interactive" icon={StarOutline} ratingLabel='Rate' iconVariant="iconInteractive" />
        </Stack>
    )
}