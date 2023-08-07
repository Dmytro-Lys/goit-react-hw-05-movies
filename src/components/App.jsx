
import { Route, Routes } from "react-router-dom";
import {lazy} from 'react';


import { SharedLayout } from "./SharedLayout/SharedLayout";

const Movies = lazy(() => import("../pages/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const Home = lazy(() => import("../pages/Home"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

export const App = () => {
  return (
    <Routes>
      <Route path="/goit-react-hw-05-movies" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />}/>
        <Route path="movies/:movieId" element={<MovieDetails />} >
          <Route path="cast" element={<Cast />} ></Route>
          <Route path="reviews" element={<Reviews />} ></Route>
        </Route>
      </Route>
    </Routes>
  );
};


export default App