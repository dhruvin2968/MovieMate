import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Backupimgsathi from "./img.jpeg";
import axios from "axios";
import toast from "react-hot-toast";

export const Card = ({ movie, state, setState }) => {
  const { id, original_title, overview, poster_path } = movie;
  const imgpth = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : Backupimgsathi;

  const [inWatchlist, setInWatchlist] = useState(false);
  const userToken = localStorage.getItem("token");
  useEffect(() => {
    const checkWatchlist = async () => {
      if (!userToken) {
        return;
      }
      try {
        const response = await axios.get(
          "https://moviemate-backend-tpz4.onrender.com/watchlist",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            withCredentials: true,
          }
        );

        const isInWatchlist = response.data.some(
          (item) => item.movie.id === id
        );
        setInWatchlist(isInWatchlist);
      } catch (error) {
        console.error("Error checking watchlist:", error);
      }
    };

    checkWatchlist();
  }, [id,userToken]); // Runs when 'id' changes

  const addToWatchlist = async () => {
    try {
      const username = localStorage.getItem("username"); // Get user ID from storage

      if (!username) {
        toast.error("Please log in.");
        return;
      }
      await axios.post(
        "https://moviemate-backend-tpz4.onrender.com/watchlist",
        { movie },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // ✅ Correct format
          },
          withCredentials: true,
        }
      );

      setInWatchlist(true);
      toast.success("Added to Watchlist!");
    } catch (error) {
      toast.error("Movie already in your Watchlist");
    }
  };

  const removeFromWatchlist = async () => {
    try {
      const username = localStorage.getItem("username");
      if (!username) {
        toast.error("Invalid movie ID");
        return;
      }

      if (!movie.id) {
        toast.error("Invalid movie ID");
        return;
      }

      await axios.delete(
        "https://moviemate-backend-tpz4.onrender.com/watchlist",
        {
          data: { movieId: movie.id },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          withCredentials: true,
        }
      );

      setState((prev) => !prev); // ✅ Correct way to trigger `useEffect`
      toast.success("Removed from Watchlist!");
    } catch (error) {
      console.error("Delete Error:", error.response?.data || error.message);
      toast.error("Failed to remove movie");
    }
  };

  return (
    <div className="max-w-sm bg-white border  rounded-lg shadow-sm shadow-slate-400 dark:shadow-white dark:bg-black dark:border-gray-400 m-4">
      <Link to={`/movie/${id}`}>
        <img className="rounded-t-lg" src={imgpth} alt={original_title} />
      </Link>
      <div className="p-5">
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {original_title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview}
        </p>
        <button
          onClick={inWatchlist ? removeFromWatchlist : addToWatchlist}
          className={`w-full px-4 py-2 sticky bottom-3 text-white font-semibold rounded-md ${
            inWatchlist
              ? "bg-red-500 hover:bg-red-700"
              : "bg-blue-500 hover:bg-blue-700"
          }`}
        >
          {inWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
        </button>
      </div>
    </div>
  );
};
