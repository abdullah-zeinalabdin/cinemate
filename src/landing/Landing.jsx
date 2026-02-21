/* MUI Imports */
import Stack from "@mui/material/Stack";
/* === MUI Imports === */
import SearchBar from "./SearchBar";

export default function Landing() {
    return (
        <Stack direction='column' p={5} mb={5}>
            <SearchBar />
        </Stack>
    )
}