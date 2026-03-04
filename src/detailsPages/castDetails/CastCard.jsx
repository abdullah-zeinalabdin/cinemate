import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

export default function CastCard() {
    const castArr = useSelector((state) => state.cinemate?.castDetails.cast)
    return (
        <Stack direction='row' sx={{overflowX: 'scroll', scrollbarWidth: 'none'}} spacing={4}>
            {castArr?.slice(0, 10).map((cast) => {
                return (
                    <Stack key={cast.id} direction='column' spacing={2} sx={{cursor: 'pointer'}}> 
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
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '6px',
                            }}
                            />
                        </Box>
                        <Stack color='text.primary' textAlign='center'>
                            <Typography fontSize='20px' fontWeight='600'>{cast.name}</Typography>
                            <Typography color="text.secondary">{cast.character}</Typography>
                        </Stack>
                    </Stack>
            )
            })}
        </Stack>
    )
}