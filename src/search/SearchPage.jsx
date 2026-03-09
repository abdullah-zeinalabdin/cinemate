/* MUI Imports */
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
/* === MUI Imports === */
import MovieSection from "./MovieSection";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import GlobalError from "../GlobalError";
export default function SearchPage() {
    const movies = useSelector((state) => state.cinemate.search['list']);
    const isLoadingSearch = useSelector((state) => state.cinemate.isLoading.listsearch);
    const isRejectedSearch = useSelector((state) => state.cinemate.isRejected.listsearch);
    return (
        <Stack p={5} spacing={4}>
            <SearchBar />
            {
                isRejectedSearch 
                ?
                <GlobalError />
                :
                <>
                    <Typography variant="h3" color="text.primary">Search Result</Typography>
                    {movies.map((movie) => {
                        return <MovieSection 
                            title={movie.title || movie.original_name}
                            overview={movie.overview}
                            posterSrc={movie.poster_path || movie.profile_path}
                            key={movie.id}
                            id={movie.id}
                            mediaType={movie.media_type}
                            isLoading={isLoadingSearch}
                        />
                    })}
                </>
            }
            
        </Stack>
    )
}