import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MovieCardContainer from "./MovieCardContainer";
import { Fragment } from "react";
export default function MovieRow({movieRowArr}) {    
    return (
        <Stack direction='column' spacing={2}>
            {movieRowArr.map((section) => {
                return (
                    <Fragment key={section.id}>
                        <Typography variant="h3" color="text.primary">
                            {section.sectionLabel}
                        </Typography>
                        <MovieCardContainer movies={section.movies}/>
                    </Fragment>
                )
            })};
        </Stack>
    )
}