import { Box, Stack, Typography } from "@mui/material";
import { HomeIcon, MovieCreationIcon, OndemandVideoIcon, PersonIcon, StarIcon } from "@mui/icons-material";

import NavItem from './NavItem';

export default function Navbar() {
    let navArr = [
        {id: 1, label: 'Home', icon: <HomeIcon />, to: '/'},
        {id: 2, label: 'Movies', icon: <MovieCreationIcon />, to: '/movies'},
        {id: 3, label: 'TV Shows', icon: <OndemandVideoIcon />, to: '/tv'},
        {id: 4, label: 'My Ratings', icon: <StarIcon />, to: '/rating'},
        {id: 5, label: 'Profile', icon: <PersonIcon />, to: '/profile'},
    ]
    return (
        <Stack sx={{bgcolor: 'background.paper', minHeight: '100%'}} p={{xs: 0, sm: 3}}>
            <Typography textAlign='center' variant="h1" color='primary.main' mb={8}>
                    <Box component='span' sx={{display: {xs: 'none', sm: 'initial'}, userSelect: 'none'}}> 
                        CINEMATE
                    </Box>
                    <Box component='span' sx={{display: {xs: 'initial', sm: 'none'}}}> 
                        CM
                    </Box>
            </Typography>
            <Stack color='text.secondary' direction="column" spacing={4} justifyContent='center'>
                {
                    navArr.map((nav) => {
                        return <NavItem key={nav.id} label={nav.label} icon={nav.icon} to={nav.to}/>
                    })
                }
            </Stack>
        </Stack>
    );
}