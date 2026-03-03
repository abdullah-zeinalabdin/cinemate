import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
export default function CinemaOverview() {
    const poster = useSelector((state) => state.cinemate.cinemaDetails.poster_path);
    const title = useSelector((state) => state.cinemate.cinemaDetails?.title || state.cinemate.cinemaDetails?.name);
    const date = useSelector((state) => state.cinemate.cinemaDetails?.release_date || state.cinemate.cinemaDetails?.first_air_date );
    const year = date?.slice(0, 4) ?? '-';
    return (
        <Stack direction='row' p={5} sx={{position: 'relative', zIndex: 1}}>
            <Box
            sx={{
                    height: '480px',
                    aspectRatio: 2 / 3,
                }}
            >
                <Box
                component='img'
                src={`https://image.tmdb.org/t/p/w500/${poster}`}
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '6px',
                    cursor: 'pointer'
                }}
                />
            </Box>
            <Stack>
                <Stack spacing={2} direction='row' alignItems='center'>
                    <Typography color='text.primary' variant="h2">{title}</Typography>
                    <Typography color='text.secondary' variant="h3">({year})</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}