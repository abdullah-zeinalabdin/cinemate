import Box from "@mui/material/Box"
import { useSelector } from "react-redux"
export default function ActorPoster() {
    const poster = useSelector((state) => state.cinemate?.actorDetails?.profile_path);
    return (
        <Box
        sx={{
            width: {
                xs: 240,
                sm: 280,
                md: 320,
            },
            aspectRatio: 2 / 3,
        }}
        >
            <Box
            component='img'
            alt='poster'
            src={`https://image.tmdb.org/t/p/original/${poster}`}
            sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '6px',
                cursor: 'pointer'
            }}
            />
        </Box>
    )
}