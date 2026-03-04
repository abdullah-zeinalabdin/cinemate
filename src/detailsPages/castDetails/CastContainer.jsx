import Stack from "@mui/material/Stack";
import CastCard from "./CastCard";
import Typography from "@mui/material/Typography";

export default function CastContainer() {
    return (
        <Stack p={5} spacing={2}>
            <Typography variant="h2" color="text.primary">Cast and Crew</Typography>
            <CastCard />
        </Stack>
    )
}