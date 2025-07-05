import React from "react";
import { Link } from "react-router-dom";
import Backupimgsathi from "./backupImg.png";

export const CardLite = ({ movie }) => {
  const { id, title, overview, poster_path } = movie;
  const isFallback = !poster_path;
  const imgpth = isFallback
    ? Backupimgsathi
    : `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-xl overflow-hidden transition-transform shadow-xl m-4 dark:bg-gray-900 dark:border-gray-700">
      <Link to={`/movie/${id}`} className="relative">
        <img
          className="w-full aspect-[2/3] object-cover transition-opacity duration-300 hover:opacity-95"
          src={imgpth}
          alt={title}
        />
        {isFallback && (
          <div className="absolute bottom-16 right-28 w-full text-center px-4">
            <h2 className="text-3xl font-black tracking-wide bg-gradient-to-r  from-red-500  via-yellow-500 to-blue-600 bg-clip-text text-transparent drop-shadow-md animate-bounce">
              {title}
            </h2>
          </div>
        )}
      </Link>
      <div className="p-5 flex flex-col gap-3">
        {!isFallback && (
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2">
            {title}
          </h5>
        )}
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
