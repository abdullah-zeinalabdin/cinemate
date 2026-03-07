import { useDispatch } from "react-redux"
import { useEffect} from "react"
import { fetchCinemaDataObj } from "../../redux/cinemateSlice"
import { useParams } from "react-router-dom"
import ActorPageHeader from "./ActorPageHeader";
import ActorMovies from "./ActorMovies"
export default function ActorPage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(fetchCinemaDataObj({url: `https://api.themoviedb.org/3/person/${id}`, key: 'actorDetails'}));
        dispatch(fetchCinemaDataObj({url: `https://api.themoviedb.org/3/person/${id}/combined_credits`, key: 'actorCredits'}));
    }, [dispatch, id])
    return (    
        <>
            <ActorPageHeader />
            <ActorMovies />
        </>
    )
}