import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

import Backupimgsathi from "../components/img.jpeg";
import MovieRecommendations from "./MovieRecommender";

export const MovieDetailPage = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});

  useTitle(`${movie.title} / MovieMate`);

  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : Backupimgsathi;

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://moviemate-backend-tpz4.onrender.com/api/tmdb/movie/${params.id}`
      );
      const data = await response.json();
      setMovie(data);
    }
    fetchMovie();
  }, [params.id]);

  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img className="rounded border-2 " src={image} alt={movie.title} />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left ">
            {movie.title}
          </h1>
          <h2 className="text-2xl font-bold my-3 text-center lg:text-left ">
            {movie.tagline}
          </h2>
          <p align="left" className="my-4">
            {movie.overview}
          </p>
          {movie.genres ? (
            <p className="my-7 flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  className="mr-2 border border-gray-400 rounded dark:border-gray-600 p-2"
                  key={genre.id}
                >
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}

          <div className="flex items-center">
            {" "}
            {/*Copied from Flowbite for ratings */}
            <div className="flex items-center mb-6">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <title>Rating star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span className="ml-2 text-lg font-bold">
                {movie.vote_average}
              </span>
              <span className="mx-2 w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-500"></span>
              <span className="text-base">{movie.vote_count} reviews</span>
            </div>
          </div>

          <p align="left" className="my-4">
            <span className="mr-2 font-bold">Runtime:</span>
            <span>{movie.runtime} min.</span>
          </p>

          <p align="left" className="my-4">
            <span className="mr-2 font-bold">Budget:</span>
            <span>{movie.budget}</span>
          </p>

          <p align="left" className="my-4">
            <span className="mr-2 font-bold">Revenue:</span>
            <span>{movie.revenue}</span>
          </p>

          <p align="left" className="my-4">
            <span className="mr-2 font-bold">Release Date:</span>
            <span>{movie.release_date}</span>
          </p>

          <p align="left" className="my-4">
            <span className="mr-2 font-bold">IMDB Code:</span>
            {/* This a href will take you to imdb details of that movie */}
            <a
              href={`https://www.imdb.com/title/${movie.imdb_id}`}
              target="_blank"
              rel="noreferrer"
            >
              <u>{movie.imdb_id}</u>
            </a>
          </p>
        </div>
      </section>
      <MovieRecommendations movieTitle={movie.title} />
    </main>
  );
};
