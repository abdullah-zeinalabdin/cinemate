import Stack from "@mui/material/Stack";
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useSelector } from "react-redux";
import RatingBlock from "./RatingBlock";
export default function Ratings() {
    const TMDBRating = useSelector((state) => state.cinemate.cinemaDetails?.vote_average);
    return (
        <Stack direction='row' spacing={3} mb={5}> 
            <RatingBlock label='TMDB Rating' icon={StarIcon} ratingLabel={`${TMDBRating?.toFixed(1)}/10`}/>
            <RatingBlock label='Your Rating' variant="interactive" icon={StarOutlineIcon} ratingLabel='Rate' iconVariant="iconInteractive"/>
        </Stack>
    )
}