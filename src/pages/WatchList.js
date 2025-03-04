import { Card } from "../components";
import { useEffect, useState } from "react";
import { useTitle } from "../hooks/useTitle";
import axios from "axios";

export const Watchlist = () => {
  const [movies, setMovies] = useState([]);
  useTitle("Your Watchlist");

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const response = await axios.get("/api/watchlist"); // Adjust API route accordingly
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching watchlist:", error);
      }
    };

    fetchWatchlist();
  }, []);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <h1 className="text-2xl font-bold mb-5">Your Watchlist</h1>
        <div className="flex flex-wrap justify-evenly other:justify-start">
          {movies.length > 0 ? (
            movies.map((movie) => <Card key={movie.id} movie={movie} />)
          ) : (
            <p className="text-center w-full text-gray-500">Your watchlist is empty.</p>
          )}
        </div>
      </section>
    </main>
  );
};
