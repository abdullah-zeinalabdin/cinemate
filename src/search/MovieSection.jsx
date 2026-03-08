import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { searchResultStyles } from "../Styles";

export default function MovieSection({title, overview, posterSrc, id, mediaType}) {
    return (
        <Stack 
        spacing={5} 
        component={Link}
        to={mediaType === 'person' ? `/cast/${id}` : `/cinema/${mediaType}/${id}`}
        sx={{textDecoration: 'none'}}
        >
            <Stack direction={{xs: 'column', sm:'row'}} sx={searchResultStyles}>
                <Box sx={{height: '220px', aspectRatio: 2 / 3,}}>
                    <Box component='img'
                    sx={{height:'100%', objectFit: 'cover', borderRadius: '6px'}} 
                    src={`https://image.tmdb.org/t/p/w500/${posterSrc}`}
                    alt="poster"
                    color='text.primary'
                    />
                </Box>
                <Stack p={2} spacing={2} justifyContent={'center'}>
                    <Typography variant="h3" color='text.primary'>{title}</Typography>
                    <Typography variant="h4" color='text.secondary'>{overview}</Typography>
                </Stack>
                
            </Stack>
            <Divider sx={{bgcolor: 'primary.main', width: '80%', alignSelf: 'center'}}/>
        </Stack>
    )
}