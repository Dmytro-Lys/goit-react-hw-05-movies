import Notiflix from 'notiflix';
import 'notiflix/src/notiflix.css';
import { useParams } from "react-router-dom";
import { Container, CardWrapper, Name } from "./Cast.style";
import { getMovieById } from "../../service/api";
import { useState, useEffect, useCallback } from "react";


const Cast = () => {
  const baseUrl = 'https://www.themoviedb.org/t/p/w138_and_h175_face'  
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
    const { movieId } = useParams();
    const [castList, setCastList] = useState([]);
  const onError = err => Notiflix.Notify.failure(err.message);
    
    const fetchMovieCast = useCallback(async () => {
    try {
      const result = await getMovieById(`${movieId}/credits`)
        if (!result) throw new Error("Sorry, no data cast.");
        setCastList(result.cast)
    } catch (error) {
      onError(error)
    };
    }, [movieId])
    
    useEffect(() => {
      fetchMovieCast()
    }, [fetchMovieCast]);  

  return (
      <>
          {castList.length > 0 ?
              (<Container >
                  {castList.map(({ id, profile_path, name }) => (
                      <CardWrapper key={id}>
                          <img src={profile_path ? `${baseUrl}${profile_path}` : defaultImg} alt="" />
                          <Name>{name}</Name>
                      </CardWrapper>
                  ))}
              </Container >) : (<p>No cast information available</p>)}
    </>
  );
};

export default Cast;