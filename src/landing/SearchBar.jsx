/* MUI Imports */

import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
/* === MUI Imports === */
export default function SearchBar() {
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
                <Button variant="contained" color='primary' sx={{borderRadius: '6px', width: {xs: '50px', sm: '100px'}}}>Search</Button>
            </Stack>
    )
}