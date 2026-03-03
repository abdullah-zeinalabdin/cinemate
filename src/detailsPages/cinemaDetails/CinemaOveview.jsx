import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import OverviewHeader from "./OverviewHeader";
import Ratings from "./Ratings";
import OverviewSection from "./OverviewSection";
export default function CinemaOverview() {
    const poster = useSelector((state) => state.cinemate.cinemaDetails.poster_path);
    return (
        <Stack direction={{xs: 'column-reverse', md: 'row'}} spacing={4} p={5} sx={{position: 'relative', zIndex: 1}} alignItems={{xs: 'center'}}>
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
                <OverviewHeader />
                <Ratings />
                <OverviewSection />
            </Stack>
        </Stack>
    )
}