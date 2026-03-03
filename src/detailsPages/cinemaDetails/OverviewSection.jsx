import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

export default function OverviewSection() {
    const overview = useSelector((state) => state.cinemate.cinemaDetails?.overview);
    return (
        <Stack color='text.primary'>
            <Typography variant="h3" mb={2}>Overview</Typography>
            <Typography color='text.secondary' fontSize='large' sx={{width: {xs: 240, md: 320, lg: 500}}}>{overview}</Typography>
        </Stack>
    )
}