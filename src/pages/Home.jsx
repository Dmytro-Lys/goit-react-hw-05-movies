import Notiflix from 'notiflix';
import 'notiflix/src/notiflix.css';
import { MoviesList } from "../components/MoviesList/MoviesList";
import { getTrending } from "../service/api";
import {useState, useEffect, useCallback} from 'react'

const Home = () => {
   const [movies, setMovies] = useState([]);
  const onError = err => Notiflix.Notify.failure(err.message)
  const fetchTranding = useCallback(async () => {
    try {
      const result = await getTrending()
      if (!result) throw new Error("Sorry, no data tranding.");
      setMovies(result)
    } catch (error) {
      onError(error)
    };
  }, [])
  
  useEffect( () => {
    fetchTranding()
  }, [fetchTranding]);
  
  return (
    <main>
      <h1>Tranding today</h1>
      {movies.length>0 && <MoviesList movies={movies} />}
    </main>
  );
};

export default Home;