import NavItem from './NavItem';
/* MUI Imports */
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
/* === MUI Imports === */

export default function Navbar() {

    return (
        <Stack sx={{bgcolor: 'background.paper', minHeight: '100%'}} p={{xs: 0, sm: 3}}>
            <Typography textAlign='center' variant="h1" color='primary.main' mb={8}>
                    <Box component='span' sx={{display: {xs: 'none', sm: 'initial'}}}> 
                        CINEMATE
                    </Box>
                    <Box component='span' sx={{display: {xs: 'initial', sm: 'none'}}}> 
                        CM
                    </Box>
            </Typography>
            <Stack color='text.secondary' direction="column" spacing={4} justifyContent='center'>
                <NavItem icon={<HomeIcon />} label={'Home'} active={true}/>
                <NavItem icon={<MovieCreationIcon />} label={'Movies'} />
                <NavItem icon={<OndemandVideoIcon />} label={'TV Shows'} />
                <NavItem icon={<FavoriteIcon />} label={'Favorites'} />
                <NavItem icon={<WatchLaterIcon />} label={'Watchlist'} />
                <NavItem icon={<PersonIcon />} label={'Profile'} />
            </Stack>
        </Stack>
    );
}