import React from "react";
import { Link } from "react-router-dom";
import Backupimgsathi from "./img.jpeg";
export const CardLite = ({ movie }) => {
  const { id,title, overview,poster_path} = movie;
const imgpth = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : Backupimgsathi;
  return (
  <div className="max-w-sm bg-white border border-gray-200 rounded-xl  overflow-hidden transition-transform shadow-xl m-4 dark:bg-gray-900 dark:border-gray-700">
    <Link to={`/movie/${id}`}>
      <img
        className="w-full aspect-[2/3] object-cover transition-opacity duration-300 hover:opacity-90"
        src={imgpth}
        alt={title}
      />
    </Link>
    <div className="p-5 flex flex-col gap-3">
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2">
        {title}
      </h5>
      <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
        {overview}
      </p>
      <Link
        to={`/movie/${id}`}
        className="mt-2 inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow hover:bg-blue-700 transition-colors"
      >
        View Details
      </Link>
    </div>
  </div>
);

};
