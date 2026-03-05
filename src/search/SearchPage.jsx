/* MUI Imports */
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
/* === MUI Imports === */
import MovieSection from "./MovieSection";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
export default function SearchPage() {
    const movies = useSelector((state) => state.cinemate.search['list']);
    return (
        <Stack p={5} spacing={4}>
            <SearchBar />
            <Typography variant="h3" color="text.primary">Search Result</Typography>
            {movies.map((movie) => {
                return <MovieSection 
                    title={movie.title || movie.original_name}
                    overview={movie.overview}
                    posterSrc={movie.poster_path || movie.profile_path}
                    key={movie.id}
                    id={movie.id}
                    mediaType={movie.media_type}
                />
            })}
        </Stack>
    )
}