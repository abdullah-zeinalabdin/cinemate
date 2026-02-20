import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function NavItem( {icon, label, active} ) {
    return (
        <Stack
            direction='row'
            spacing={4}
            alignItems='center'
            justifyContent={{xs: 'center', sm: 'flex-start'}}
            sx={{
                padding: '10px',
                cursor: 'pointer',
                borderRadius: 2,
                transition: '0.3s',
                "&:hover": { bgcolor: 'text.hover'},
                bgcolor: active ? 'text.hover' : '',
            }}

        >
            {icon}
            <Typography variant='h4' sx={{display: {xs: 'none', sm: 'block'}}}>
                {label}
            </Typography>
        </Stack>
    )
}