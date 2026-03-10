import { useSelector } from "react-redux";

import { Box, Skeleton } from "@mui/material";

import { cinemaImgContainerStyles, cinemaImgStyles } from "../../Styles";

export default function ActorPoster() {
    const poster = useSelector((state) => state.cinemate?.actorDetails?.profile_path);
    const isLoadingPoster = useSelector((state) => state.cinemate.isLoading.actorDetails);
    return (
        isLoadingPoster
        ?
        <Box sx={cinemaImgContainerStyles}>
            <Skeleton variant="rounded" sx={cinemaImgStyles}/>
        </Box>
        :
        <Box sx={cinemaImgContainerStyles}>
            <Box
            component='img'
            alt='poster'
            src={`https://image.tmdb.org/t/p/original/${poster}`}
            sx={cinemaImgStyles}
            />
        </Box>
    )
}