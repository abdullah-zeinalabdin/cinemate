import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import OverviewHeader from "./OverviewHeader";
import Ratings from "./Ratings";
import OverviewSection from "./OverviewSection";
import { cinemaImgContainerStyles, cinemaImgStyles } from "../../Styles";
export default function CinemaOverview() {
    const poster = useSelector((state) => state.cinemate.cinemaDetails.poster_path);
    return (
        <Stack direction={{xs: 'column-reverse', md: 'row'}} spacing={4} p={5} sx={{position: 'relative', zIndex: 1}} alignItems={{xs: 'center'}}>
            <Box
            sx={cinemaImgContainerStyles}
            >
                <Box
                component='img'
                src={`https://image.tmdb.org/t/p/w500/${poster}`}
                sx={cinemaImgStyles}
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