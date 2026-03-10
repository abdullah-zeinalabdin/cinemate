import { useSelector } from "react-redux";

import { Skeleton, Stack, Typography } from "@mui/material";

export default function OverviewHeader() {
    const title = useSelector((state) => state.cinemate.cinemaDetails?.title || state.cinemate.cinemaDetails?.name);
    const date = useSelector((state) => state.cinemate.cinemaDetails?.release_date || state.cinemate.cinemaDetails?.first_air_date );
    const genres = useSelector((state) => state.cinemate.cinemaDetails?.genres);
    const isLoadingDetails = useSelector((state) => state.cinemate.isLoading.cinemaDetails);
    const year = date?.slice(0, 4) ?? '-';
    return (
        <>
            <Stack spacing={2} direction='row' alignItems='center'>
                    {(
                        isLoadingDetails ? 
                        <Skeleton variant="text" width='80%' sx={{fontSize: '2rem'}}/>
                        :
                        <>
                            <Typography color='text.primary' variant="h2">{title}</Typography>
                            <Typography color='text.secondary' variant="h3">{year}</Typography>
                        </>
                    )}
            </Stack>
            <Stack direction='row' color='text.secondary' mb={2} spacing={2}>
                    {genres?.map((genre) => {
                        return (
                            isLoadingDetails ? 
                            <Skeleton key={genre.id} variant="text" width='10%' sx={{fontSize: '2rem'}} />
                            :
                            <Typography key={genre.id}>{genre.name}</Typography>
                        )
                    })}
            </Stack>
        </>
    )
}