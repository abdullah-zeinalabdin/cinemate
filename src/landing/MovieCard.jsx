import Box from '@mui/material/Box';

export default function MovieCard({src}) {
    return (
            <Box 
                component='img'
                src={src}
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '6px',
                    cursor: 'pointer'
                }}
            >
            </Box>
    )
}