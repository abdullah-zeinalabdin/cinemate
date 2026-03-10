import { useSelector } from 'react-redux';

import { Box, Button, ButtonGroup, Modal, Stack, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

import { ratingModalStyles } from '../../Styles';

export default function RatingModal({open, handleClose, setRating, handleRatingClick}) {
    const cinemaName = useSelector((state) => state.cinemate?.cinemaDetails?.title || state.cinemate?.cinemaDetails?.name)
    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={ratingModalStyles} >
                <Stack justifyContent='center' alignItems='center' spacing={2} mb={2}>
                        <StarIcon sx={{fontSize: '8rem', color: '#FFD700'}}/>
                        <Typography color="text.primary" variant="h2" textAlign='center'>Rate {cinemaName}</Typography>
                </Stack>
                <ButtonGroup>
                    {Array.from({ length: 11 }, (_, i) => (
                        <Button
                        key={i}
                        sx={{
                            color: '#FFD700',
                            border: 'none',
                            '&:hover': {
                                color: '#FFC107',
                            }
                        }}
                        onClick={() => {
                            setRating(i);
                            handleRatingClick(i);
                            handleClose();
                        }}
                        >
                            {i}
                        </Button>
                    ))}
                </ButtonGroup>
            </Box>
        </Modal>
    )
}