import Box from "@mui/material/Box"
import { useSelector } from "react-redux"
import { cinemaImgContainerStyles, cinemaImgStyles } from "../../Styles";
export default function ActorPoster() {
    const poster = useSelector((state) => state.cinemate?.actorDetails?.profile_path);
    return (
        <Box
        sx={cinemaImgContainerStyles}
        >
            <Box
            component='img'
            alt='poster'
            src={`https://image.tmdb.org/t/p/original/${poster}`}
            sx={cinemaImgStyles}
            />
        </Box>
    )
}