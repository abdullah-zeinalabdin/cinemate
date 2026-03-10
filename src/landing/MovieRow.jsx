import { Fragment } from "react";

import { Stack, Typography } from "@mui/material";

import MovieCardContainer from "./MovieCardContainer";

export default function MovieRow({movieRowArr}) {    
    return (
        <Stack direction='column' spacing={2}>
            {movieRowArr.map((section) => {
                return (
                    <Fragment key={section.id}>
                        <Typography variant="h3" color="text.primary">
                            {section.sectionLabel}
                        </Typography>
                        <MovieCardContainer 
                        movies={section.movies} 
                        isLoading={section.isLoading} 
                        mediaType={section.mediaType}
                        isRejected={section.isRejected}
                        />
                    </Fragment>
                )
            })};
        </Stack>
    )
}