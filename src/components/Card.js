import { Link } from "react-router-dom";
import { useState,useEffect} from "react";
import Backupimgsathi from "./img.jpeg";
import axios from "axios";
import toast from "react-hot-toast";

export const Card = ({ movie }) => {
  const { id, original_title, overview, poster_path } = movie;
  const imgpth = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : Backupimgsathi;

  const [inWatchlist, setInWatchlist] = useState(false);
  useEffect(() => {
    const checkWatchlist = async () => {
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) return;

        const response = await axios.get(
          `https://moviemate-backend-tpz4.onrender.com/watchlist?userId=${userId}`,
          { withCredentials: true }
        );

        // Check if this movie exists in the fetched watchlist
        const isInWatchlist = response.data.some((item) => item.movie.id === id);
        setInWatchlist(isInWatchlist);
      } catch (error) {
        console.error("Error checking watchlist:", error);
      }
    };

    checkWatchlist();
  }, [id]); // Runs when 'id' changes

  const addToWatchlist = async () => {
    try {
      const userId = localStorage.getItem("userId"); // Get user ID from storage
  
      if (!userId) {
        toast.error("User ID not found. Please log in.");
        return;
      }
  
      await axios.post(
        "https://moviemate-backend-tpz4.onrender.com/watchlist",
        { userId, movie },
        { withCredentials: true }
      );
  
      setInWatchlist(true);
      toast.success("Added to Watchlist!");
    } catch (error) {
      toast.error("Movie already in your Watchlist");
    }
  }; 
  
  const removeFromWatchlist = async () => {
    try {
      const userId = localStorage.getItem("userId"); // Get user ID from storage
  
      if (!userId) {
        toast.error("User ID not found. Please log in.");
        return;
      }
  
      await axios.delete(`https://moviemate-backend-tpz4.onrender.com/watchlist/${id}`, {
        data: { userId },
      });
  
      setInWatchlist(false);
      toast.success("Removed from Watchlist!");
    } catch (error) {
      toast.error("Failed to remove movie");
    }
  };
  

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm shadow-black dark:shadow-white dark:bg-black dark:border-gray-400 m-4">
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
          className={`w-full px-4 py-2 text-white font-semibold rounded-md ${
            inWatchlist ? "bg-red-500 hover:bg-red-700" : "bg-blue-500 hover:bg-blue-700"
          }`}
        >
          {inWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
        </button>
      </div>
    </div>
  );
};
