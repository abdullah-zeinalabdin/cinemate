import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
export default function RatingBlock({label, variant = 'default', icon: Icon, ratingLabel, iconVariant = 'iconDefault'}) {
    const styles = {
        default: {},
        interactive: {
            cursor: 'pointer',
            transition: 'all ease 0.3s',
            borderRadius: '6px',
            '&:hover' : {
                bgcolor: 'rgba(255, 215, 0, 0.08)'
            }
        },
        iconDefault: {color: '#FFD700'},
        iconInteractive: {
            color: '#FFD700',
            transition: 'all ease 0.3s',
            '&:hover': {
                color: '#FFC107',
            }
        }
    }
    return (
        <Stack color='text.primary' spacing={1} alignItems='center'>
            <Typography color="text.secondary" textAlign='center'>{label}</Typography>
            <Stack direction='row' alignItems='center' spacing={1} p={1} sx={styles[variant]}>
                <Icon fontSize='large' sx={styles[iconVariant]}/>
                <Typography variant="h5" color="text.primary">{ratingLabel}</Typography>
            </Stack>
        </Stack>
    )
}