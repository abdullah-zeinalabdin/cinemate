import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { Box, Skeleton, Stack, Typography } from "@mui/material";

import { cinemaImgStyles } from "../../Styles";

export default function CastCard() {
    const castArr = useSelector((state) => state.cinemate?.castDetails.cast);
    const isLoadingCast = useSelector((state) => state.cinemate.isLoading.castDetails);
    return (
        <Stack 
        direction='row' 
        sx={{overflowX: 'scroll', scrollbarWidth: 'none'}} 
        spacing={4}
        >
            {castArr?.slice(0, 10).map((cast) => {
                return (
                    <Stack 
                    key={cast.id} 
                    component={Link}
                    to={`/cast/${cast.id}`}
                    direction='column' 
                    spacing={2} 
                    sx={{cursor: 'pointer', textDecoration: 'none'}}
                    > 
                    {(
                        isLoadingCast
                        ?
                        <>
                            <Box
                            sx={{
                                height: '250px',
                                aspectRatio: 2 / 3
                            }}
                            >
                                <Skeleton variant="rounded" sx={cinemaImgStyles}/>
                            </Box>
                            <Stack>
                                <Skeleton />
                                <Skeleton width='80%'/>
                            </Stack>
                        </>
                        :
                        <>
                            <Box
                            sx={{
                                height: '250px',
                                aspectRatio: 2 / 3
                            }}
                            >
                                <Box
                                component='img'
                                src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                                alt='poster'
                                sx={cinemaImgStyles}
                                />
                            </Box>
                            <Stack color='text.primary' textAlign='center'>
                                <Typography fontSize='20px' fontWeight='600'>{cast.name}</Typography>
                                <Typography color="text.secondary">{cast.character}</Typography>
                            </Stack>
                        </>
                    )}
                    </Stack>
            )
            })}
        </Stack>
    )
}