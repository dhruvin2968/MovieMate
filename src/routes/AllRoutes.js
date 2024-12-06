import {Routes,Route} from "react-router-dom";
import { MovieList, MovieDetailPage, Search, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <div className="">
    <Routes>
    <Route path="" element={<MovieList apiPath="movie/now_playing" title="MovieMate"/>} />
    <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular Movies/MovieMate"/>} />
    <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="Top Rated Movies/MovieMate"/>} />
    <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming Movies/MovieMate"/>} />
    <Route path="search" element={<Search apiPath="search/movie" />} />
    <Route path="movie/:id" element={<MovieDetailPage />} />
    <Route path="*" element={<PageNotFound />} />
    </Routes>
    </div>
  )
};