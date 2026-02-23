/* MUI Imports */
import Stack from "@mui/material/Stack";
/* === MUI Imports === */
import SearchBar from "./SearchBar";
import MovieRow from "./MovieRow";
import { useDispatch, useSelector } from 'react-redux';

export default function Landing() {
    const dispatch = useDispatch();
    const Data = useSelector((state) => {
        console.log("coming from redux", state);
        return state;
    });
    console.log(Data);
    return (
        <Stack direction='column' p={5}>
            <SearchBar />
            <MovieRow />
        </Stack>
    )
}