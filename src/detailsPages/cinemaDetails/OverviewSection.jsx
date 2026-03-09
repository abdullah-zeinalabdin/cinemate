import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import Skeleton from "@mui/material/Skeleton";
export default function OverviewSection() {
    const overview = useSelector((state) => state.cinemate.cinemaDetails?.overview);
    const isLoadingDetails = useSelector((state) => state.cinemate.isLoading.cinemaDetails);
    return (
        <Stack color='text.primary'>
            <Typography variant="h3" mb={2}>Overview</Typography>
            {(
                isLoadingDetails
                ?
                <Stack spacing={0.5}  sx={{fontSize: '2rem'}}>
                    <Skeleton variant="text" width='90%'/>
                    <Skeleton variant="text" width='85%' />
                    <Skeleton variant="text" width='80%'/>
                    <Skeleton variant="text" width='75%'/>
                </Stack>
                :
                <Typography color='text.secondary' fontSize='large' sx={{width: {xs: 240, md: 320, lg: 500}}}>{overview}</Typography>
            )}
        </Stack>
    )
}