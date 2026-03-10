import { Box, Typography } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';

export default function ComingSoon() {
    return (
        <Box textAlign='center' py={10} sx={{color: 'text.primary'}}>
            <ConstructionIcon sx={{fontSize: 80,}} />
            <Typography variant='h1'>Coming Soon</Typography>
            <Typography variant='h2'>This feature is under development</Typography>
        </Box>
    )
}