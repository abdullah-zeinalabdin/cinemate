import { useDispatch, useSelector } from "react-redux"
import { useEffect} from "react"
import { fetchCinemaDataObj } from "../../redux/cinemateSlice"
import { useParams } from "react-router-dom"
import ActorPageHeader from "./ActorPageHeader";
import ActorMovies from "./ActorMovies"
import GlobalError from "../../GlobalError";
export default function ActorPage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const isRejectedActorDetails = useSelector((state) => state.cinemate.isRejected.actorDetails);
    const isRejectedActorCredits = useSelector((state) => state.cinemate.isRejected.actorCredits);
    useEffect(() => {
        dispatch(fetchCinemaDataObj({url: `https://api.themoviedb.org/3/person/${id}`, key: 'actorDetails'}));
        dispatch(fetchCinemaDataObj({url: `https://api.themoviedb.org/3/person/${id}/combined_credits`, key: 'actorCredits'}));
    }, [dispatch, id])
    return (    
        <>
            {
                isRejectedActorDetails
                ?
                <GlobalError />
                :
                <ActorPageHeader />
            }
            {
                isRejectedActorCredits
                ?
                <GlobalError />
                :
                <ActorMovies />
            }
        </>
    )
}