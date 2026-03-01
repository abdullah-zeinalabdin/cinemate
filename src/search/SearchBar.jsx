/* MUI Imports */
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
/* === MUI Imports === */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchResults } from '../redux/cinemateSlice';
import { Link } from 'react-router-dom';
export default function SearchBar() {
    const [searchInput, setSearchInput] = useState('');
    const dispatch = useDispatch();
    return (
        <Stack direction='row' spacing={2} mb={5}>
            <TextField
                        sx={
                            {
                                bgcolor: 'background.paper',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'transparent',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'transparent',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'transparent',
                                        boxShadow: 'none',
                                    }
                                },
                                borderRadius: '6px',
                            }
                        }
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
                    dispatch(fetchSearchResults(`https://api.themoviedb.org/3/search/multi?query=${searchInput}&page=1`));
                }}
                component={Link}
                to='/search'
                >Search</Button>
            </Stack>
    )
}