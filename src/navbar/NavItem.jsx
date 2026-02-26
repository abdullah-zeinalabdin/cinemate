import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from 'react-router-dom';

export default function NavItem( {icon, label, to} ) {
    const location = useLocation();
    const isActive = location.pathname === to;
    return (
        <Stack
            component={Link}
            to={to}
            direction='row'
            color='text.secondary'
            spacing={4}
            alignItems='center'
            justifyContent={{xs: 'center', sm: 'flex-start'}}
            sx={{
                padding: '10px',
                cursor: 'pointer',
                borderRadius: 2,
                transition: '0.3s',
                "&:hover": { bgcolor: 'text.hover'},
                bgcolor: isActive ? 'text.hover' : 'background.paper',
                textDecoration: 'none',
            }}
        >
            {icon}
            <Typography variant='h4' sx={{display: {xs: 'none', sm: 'block'}}}>
                {label}
            </Typography>
        </Stack>
    )
}