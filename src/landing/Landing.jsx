/* MUI Imports */
import Stack from "@mui/material/Stack";
/* === MUI Imports === */
import SearchBar from "./SearchBar";
import MovieRow from "./MovieRow";
import { useDispatch} from 'react-redux';
import { fetchTopRatedApi, fetchPopularApi, fetchUpcomingApi } from "../redux/cinemateSlice";
import { useEffect } from "react";

export default function Landing() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTopRatedApi(`https://api.themoviedb.org/3/movie/top_rated`));
        dispatch(fetchPopularApi(`https://api.themoviedb.org/3/tv/popular`));
        dispatch(fetchUpcomingApi(`https://api.themoviedb.org/3/movie/upcoming`));
    }, []);
    return (
        <Stack direction='column' p={5}>
            <SearchBar />
            <MovieRow />
        </Stack>
    )
}