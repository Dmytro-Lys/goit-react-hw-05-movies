// import css from "./App.module.css";
// import { Searchbar } from "./searchbar/Searchbar";
// import { ImageGallery } from './imagegallery/ImageGallery';
// import { Loader } from "./loader/Loader";
// import { Button } from "./button/Button"
// import { Modal} from "./modal/Modal"
// import Notiflix from 'notiflix';
// import 'notiflix/src/notiflix.css';
import { Route, Routes } from "react-router-dom";
import {lazy, useRef, useState, useEffect, useCallback} from 'react';


import { SharedLayout } from "./SharedLayout/SharedLayout";

const Movies = lazy(() => import("../pages/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const Cast = lazy(() => import("../components/Cast/Cast"));
const Reviews = lazy(() => import("../components/Reviews/Reviews"));
const Home = lazy(() => import("../pages/Home"));
// const ProductDetails = lazy(() => import("../pages/ProductDetails"));
// const Products = lazy(() => import("../pages/Products"));
// const Mission = lazy(() => import("./Mission"));
// const Team = lazy(() => import("./Team"));
// const Reviews = lazy(() => import("./Reviews"));

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
// const App = () => {
  // state
  // const [images, setImages] = useState([]);
  // const [page, setPage] = useState(1);
  // const [querry, setQuerry] = useState("");
  // const [maxPage, setMaxPage] = useState(0);
  // const [isLoading, setIsLoading] = useState(false);
  // const [showImage, setShowImage] = useState({ largeImageURL: "", tags: "" });
  // const [isShowModal, setIsShowModal] = useState(false);
// ref
  // const refModal = useRef();
  // const refLastElem = useRef();


// functions
// search  
  // const handleChange = e => setQuerry(e.target.value)

  // const resetSearch = () => {
  //   setImages([])
  //   setPage(1)
  //   setMaxPage(0)
  //   setIsLoading(true)
  // }

  // const handleSubmit = e => {
  //     e.preventDefault()
  //     if (!querry.trim()) return Notiflix.Notify.failure(`Fill the search field`);
  //     resetSearch()
  // }
  
// fetch
  // const loadMore = () => {
  //   setPage(prev => prev + 1)
  //   setIsLoading(true)
  // }
  
  // const onError = err => Notiflix.Notify.failure(err.message)

  // const generateGalleryItems = data => data.map(({ webformatURL, tags, largeImageURL }) => {
  //   return { id: nanoid(), webformatURL, tags, largeImageURL }
  // })

  // const fetchData = useCallback(async () => {
  //     try {
  //        const data = await getImages(querry, page);
  //       if (!data.hits.length) throw new Error("Sorry, there are no images matching your search query. Please try again.");
  //       const imagesPage = generateGalleryItems(data.hits)
  //       setImages([...images, ...imagesPage] )
  //       if (maxPage === 0) setMaxPage(Math.ceil(data.totalHits / 12))
  //     } catch (error) {
  //       onError(error)
  //     } finally {
  //       setIsLoading( false);
  //     }
  // },[images, maxPage, querry, page])

  // Modal
  // const imageClick = ({ target: { dataset: { large }, alt } }) => {
  //   if (!large) return
  //   const imageOptions = { largeImageURL: large, tags: alt }
  //   setShowImage(imageOptions)
  //   setIsShowModal(true)
  // }

  // const closeModal = () => setIsShowModal(false)
  
  // const modalClick = (e) => {
  //   if (!e.target.src)  closeModal()
  // }

  // const handleKeyDown = e => {
  //   if (e.key === "Escape") closeModal()
  // }

// useEffects
  
  //  useEffect(() => {
  //   if (isShowModal) refModal.current.focus()
  // }, [isShowModal]);
  
  //  useEffect( () => {
  //    if (isLoading) fetchData()
  // }, [isLoading, fetchData]);
  
  // useEffect(() => {
  //   if (images.length > 0) refLastElem.current.scrollIntoView({ behavior: 'smooth' })
  // }, [images])


//   return (
//        <div className={css.App}>
//         <Searchbar querry={querry} onChange={handleChange} onSubmit={handleSubmit}/>
//         {images.length > 0 && <ImageGallery images={images} onClick={imageClick} refLastElem={refLastElem} />}
//          <Loader render={isLoading} />
//         {page < maxPage && <Button onClick={loadMore} />}
//         {isShowModal && <Modal imageOptions={showImage} refModal={refModal} onClick={modalClick} onKeyDown={handleKeyDown} />}
//        </div>
//      )
// }

export default App