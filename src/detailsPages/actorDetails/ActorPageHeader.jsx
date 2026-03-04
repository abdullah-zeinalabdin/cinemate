import Stack from "@mui/material/Stack"
import ActorPoster from "./ActorPoster";
import ActorDetailsSection from "./ActorDetailsSection";

export default function ActorPageHeader() {
    return (
            <Stack direction={{xs: 'column-reverse', md: 'row'}} spacing={4} p={5} alignItems={{xs: 'center', md: 'flex-start'}}>
                <ActorPoster />
                <ActorDetailsSection />
            </Stack>
    )
}