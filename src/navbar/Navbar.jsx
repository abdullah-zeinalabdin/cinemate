import { Box, Stack, Typography } from "@mui/material";
import { Home, MovieCreation, OndemandVideo, Person, Star } from "@mui/icons-material";

import NavItem from './NavItem';
import tmdbLogo from "../assets/tmdb.svg";

export default function Navbar() {
    let navArr = [
        {id: 1, label: 'Home', icon: <Home />, to: '/'},
        {id: 2, label: 'Movies', icon: <MovieCreation />, to: '/movies'},
        {id: 3, label: 'TV Shows', icon: <OndemandVideo />, to: '/tv'},
        {id: 4, label: 'My Ratings', icon: <Star />, to: '/rating'},
        {id: 5, label: 'Profile', icon: <Person />, to: '/profile'},
    ]
    return (
        <Stack sx={{bgcolor: 'background.paper', minHeight: '100%'}} p={{xs: 0, sm: 3}} justifyContent="space-between">
            <Stack>
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
            <Stack spacing={2}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    ml: 2,
                }}>
                    <Box component='img' src={tmdbLogo} alt="TMDB" sx={{height: 40, width: 'auto', mb: 2,}}/>
                    <Typography textAlign='center' fontSize={{xs: '0.5rem', sm: '1rem'}} color="text.primary">This product uses the TMDB API but is not endorsed or certified by TMDB.</Typography>
                </Box>
            </Stack>
        </Stack>
    );
}