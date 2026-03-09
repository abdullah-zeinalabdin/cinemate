import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from '@mui/material/Button';
import { useState } from "react";
import { useSelector } from "react-redux";
import { actorBioButtonStyles, actorBioStyles } from "../../Styles";
import Skeleton from "@mui/material/Skeleton";
export default function ActorDetailsSection() {
    const name = useSelector((state) => state.cinemate?.actorDetails?.name);
    const bio = useSelector((state) => state.cinemate?.actorDetails?.biography);
    const [expanded, setExpanded] = useState(false);
    const isLong = bio?.length > 400;
    const isLoadingActorDetails = useSelector((state) => state.cinemate.isLoading.actorDetails);
    return (
        <Stack>
            <Stack spacing={2} direction='row' alignItems='center' mb={2}>
                {(
                    isLoadingActorDetails
                    ?
                    <Skeleton width='40%' sx={{fontSize: '2rem'}}/>
                    : 
                    <Typography color='text.primary' variant="h2">{name}</Typography>
                )}
            </Stack>
            <Stack color='text.primary'>
                <Typography variant="h3" mb={2}>Biography</Typography>
                {(
                    isLoadingActorDetails
                    ?
                    <Stack spacing={0.5}  sx={{fontSize: '2rem'}}>
                        <Skeleton variant="text" width='90%'/>
                        <Skeleton variant="text" width='85%' />
                        <Skeleton variant="text" width='80%'/>
                        <Skeleton variant="text" width='75%'/>
                    </Stack>
                    :
                    <>
                        <Typography color='text.secondary' fontSize='medium' sx={actorBioStyles(expanded)}>{bio}</Typography>
                        {isLong && (<Button variant="text" onClick={() => {setExpanded((prev => !prev))}} sx={actorBioButtonStyles}>
                            {expanded ? 'Show Less' : 'Read More'}</Button>)
                        }
                    </>
                )}
            </Stack>
        </Stack>
    )
}