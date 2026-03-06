import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useSelector } from 'react-redux';
export default function RatingModal({open, handleClose, setRating, handleRatingClick}) {
    const cinemaName = useSelector((state) => state.cinemate?.cinemaDetails?.title || state.cinemate?.cinemaDetails?.name)
    return (
        <Modal open={open} onClose={handleClose}>
            <Box
            sx={{
                position: 'absolute',
                width: '500px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.default',
                borderRadius: '6px',
                p: 4,
            }}
                >
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