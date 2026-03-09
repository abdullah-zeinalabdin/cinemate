const cinemaImgStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '6px',
    cursor: 'pointer',
};

const searchResultStyles = {
    '&:hover': { 
        bgcolor: 'text.hover', 
    }, 
    transition: '0.3s', 
    cursor: 'pointer', 
    alignItems: 'center',
};

const searchBarStyles = {
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
};

const actorBioButtonStyles = {
    p: 0,
    minWidth: 'auto',
    textTransform: 'none',
    fontWeight: 500,
    ml: 1,
    color: 'primary.main'
};

const cinemaImgContainerStyles = {
    width: {
        xs: 240,
        sm: 280,
        md: 320,
    },
    aspectRatio: 2 / 3,
};

const ratingBlocksStyles = {
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
};

const ratingModalStyles = {
    position: 'absolute',
    width: '500px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.default',
    borderRadius: '6px',
    p: 4,
};

const errorBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 1,
    py: 6,
}

const navbarItemStyles = (isActive) => ({
    padding: '10px',
    cursor: 'pointer',
    borderRadius: 2,
    transition: '0.3s',
    "&:hover": { bgcolor: 'text.hover'},
    bgcolor: isActive ? 'text.hover' : 'background.paper',
    textDecoration: 'none',
});

const actorBioStyles = (expanded) => ({
    width: {xs: 240, md: 320, lg: 700},
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: expanded ? 'unset' : 5,
    overflow: 'hidden',
});

const heroBackdropStyles = (poster) => ({
    position: 'relative',
    minHeight: '70vh',
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
});

export {
    cinemaImgStyles, searchResultStyles, searchBarStyles, 
    actorBioButtonStyles, cinemaImgContainerStyles, ratingBlocksStyles,
    ratingModalStyles, errorBoxStyles,
    navbarItemStyles, actorBioStyles, heroBackdropStyles,
};