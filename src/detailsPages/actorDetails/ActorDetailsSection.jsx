import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from '@mui/material/Button';
import { useState } from "react";
import { useSelector } from "react-redux";
import { actorBioButtonStyles, actorBioStyles } from "../../Styles";
export default function ActorDetailsSection() {
    const name = useSelector((state) => state.cinemate?.actorDetails?.name);
    const bio = useSelector((state) => state.cinemate?.actorDetails?.biography);
    const [expanded, setExpanded] = useState(false);
    const isLong = bio?.length > 400;
    return (
        <Stack>
            <Stack spacing={2} direction='row' alignItems='center' mb={2}>
                <Typography color='text.primary' variant="h2">{name}</Typography>
            </Stack>
            <Stack color='text.primary'>
                <Typography variant="h3" mb={2}>Biography</Typography>
                <Typography 
                color='text.secondary' 
                fontSize='medium' 
                sx={actorBioStyles}
                >{bio}</Typography>
                {
                isLong &&
                (<Button 
                variant="text"
                onClick={() => {
                setExpanded((prev => !prev))
                }}
                sx={actorBioButtonStyles}
                >{expanded ? 'Show Less' : 'Read More'}</Button>)
                }
            </Stack>
        </Stack>
    )
}