import { Stack, Typography } from "@mui/material";

import CastCard from "./CastCard";

export default function CastContainer() {
    return (
        <Stack p={5} spacing={2}>
            <Typography variant="h2" color="text.primary">Cast and Crew</Typography>
            <CastCard />
        </Stack>
    )
}