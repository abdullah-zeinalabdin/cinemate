/* MUI Imports */
import Stack from "@mui/material/Stack";
/* === MUI Imports === */
import SearchBar from "./SearchBar";
import MovieRow from "./MovieRow";

export default function Landing() {
    return (
        <Stack direction='column' p={5}>
            <SearchBar />
            <MovieRow />
        </Stack>
    )
}