import Box from '@mui/material/Box';

export default function MovieCard({src}) {
    return (
            <Box 
                component='img'
                src={src}
                sx={{
                    minWidth: '300px',
                    height: '180px',
                    bgcolor: 'primary.main',
                    borderRadius: '6px',
                    cursor: 'pointer'
                }}
            >
            </Box>
    )
}