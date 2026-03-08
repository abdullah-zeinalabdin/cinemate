import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from 'react-router-dom';
import { navbarItemStyles } from '../Styles';

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
            sx={navbarItemStyles(isActive)}
        >
            {icon}
            <Typography variant='h4' sx={{display: {xs: 'none', sm: 'block'}}}>
                {label}
            </Typography>
        </Stack>
    )
}