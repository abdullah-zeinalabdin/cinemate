import { Box, Typography } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

import { errorBoxStyles } from './Styles';

export default function GlobalError() {
    return (
        <Box sx={errorBoxStyles}>
            <ErrorIcon sx={{ fontSize: 80, color: 'primary.main' }} />
            <Typography color='text.primary' variant='h1'>Something Went Wrong</Typography>
        </Box>
    )
}