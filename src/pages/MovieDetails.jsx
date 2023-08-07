import Notiflix from 'notiflix';
import 'notiflix/src/notiflix.css';
import { Suspense, useState, useEffect, useCallback } from "react";
import { Link, Outlet,  useParams } from "react-router-dom";
import { Container, CardWrapper } from "./MovieDetails.styled";
import Movie from "../components/Movie/Movie"
import { getMovieById } from "../service/api";
const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);
    // const movie = {}
    const onError = err => Notiflix.Notify.failure(err.message);
    
    const fetchMovie = useCallback(async () => {
    try {
      const result = await getMovieById(movieId)
        if (!result) throw new Error("Sorry, no data movie.");
        setMovie([result])
    } catch (error) {
      onError(error)
    };
    }, [movieId])
    
    useEffect(() => {
      fetchMovie()
    }, [fetchMovie]);

    return (
        <main>
            {movie.length>0 && <Movie movie={movie} />}
            <h2>Additional information</h2>    
            <ul>
                <li>
                  <Link to="cast">Cast</Link>
                </li>
                <li>
                  <Link to="reviews">Reviews</Link>
                </li>
            </ul>
       <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
      </Suspense>
        </main>
    )
}
export default MovieDetails