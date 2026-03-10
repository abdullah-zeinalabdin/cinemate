import Box from '@mui/material/Box';

import { cinemaImgStyles } from '../Styles';

export default function MovieCard({src}) {
    return (
            <Box 
                component='img'
                src={src}
                sx={cinemaImgStyles}
            >
            </Box>
    )
}