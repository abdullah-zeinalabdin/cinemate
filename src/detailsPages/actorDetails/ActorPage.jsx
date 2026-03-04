import { useDispatch } from "react-redux"
import { useEffect} from "react"
import { fetchActorCredits, fetchActorDetails } from "../../redux/cinemateSlice"
import { useParams } from "react-router-dom"
import ActorPageHeader from "./ActorPageHeader";
import ActorMovies from "./ActorMovies"
export default function ActorPage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(fetchActorDetails(`https://api.themoviedb.org/3/person/${id}`));
        dispatch(fetchActorCredits(`https://api.themoviedb.org/3/person/${id}/combined_credits`));
    }, [dispatch, id])
    return (    
        <>
            <ActorPageHeader />
            <ActorMovies />
        </>
    )
}