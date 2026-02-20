import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
        }
    },
    palette: {
        primary: {
            main: '#E50914',
        },
        secondary: {
            main: '#B81D24',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#B3B3B3',
            hover: 'rgba(255, 0, 0, 0.08)',
        },
        background: {
            default: '#0B0B0B',
            paper: '#121212'
        }
    },
    typography: {
        fontFamily: 'Intes sans-serif',
        h1: {
            fontFamily: 'poppins',
            fontWeight: 700,
            fontSize: '2rem',
            '@media (min-width:600px)': { fontSize: '2.5rem'}
        },
        h2: {
            fontFamily: 'poppins',
            fontWeight: 700,
            fontSize: '0.8rem',
            '@media (min-width:600px)': { fontSize: '2.5rem'}
        },
        h3: {
            fontFamily: 'poppins',
            fontWeight: 600,
            fontSize: '0.8rem',
            '@media (min-width:600px)': { fontSize: '2.5rem'}
        },
        h4: {
            fontFamily: 'poppins',
            fontWeight: 500,
            fontSize: '0.8rem',
        },
        button: {
            fontFamily: 'poppins',
            fontWeight: 500,
        }
    }
});

theme = responsiveFontSizes(theme);

export default theme;