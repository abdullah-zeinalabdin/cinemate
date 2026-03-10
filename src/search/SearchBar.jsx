import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { fetchCinemaDataArr } from '../redux/cinemateSlice';

import { Link } from 'react-router-dom';

import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import { searchBarStyles } from '../Styles';

export default function SearchBar() {
    const [searchInput, setSearchInput] = useState('');
    const dispatch = useDispatch();
    return (
        <Stack direction='row' spacing={2} mb={5}>
            <TextField
                        sx={searchBarStyles}
                        value={searchInput}
                        onChange={(e) => {setSearchInput(e.target.value)}}
                        fullWidth
                        placeholder="Search..."
                        id="input-with-icon-textfield"
                        slotProps={{
                        input: {
                            startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{color: 'text.secondary'}}/>
                            </InputAdornment>
                            ),
                        },
                        }}
                        variant="outlined"
                />
                <Button 
                variant="contained" 
                color='primary' 
                sx={{borderRadius: '6px', width: {xs: '50px', sm: '100px'}}}
                onClick={() => {
                    dispatch(fetchCinemaDataArr({url: `https://api.themoviedb.org/3/search/multi?query=${searchInput}&page=1`, key: 'list', mediaType: 'search'}));
                }}
                component={Link}
                to='/search'
                >Search</Button>
            </Stack>
    )
}