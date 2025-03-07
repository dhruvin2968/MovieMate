import { Card } from "../components";
import { useEffect, useState } from "react";
import { useTitle } from "../hooks/useTitle";
import axios from "axios";
import toast from "react-hot-toast"
//import { useNavigate } from "react-router-dom";



export const Watchlist = () => {
  const [movies, setMovies] = useState([]);
  //const navigate = useNavigate();
  useTitle("Your Watchlist");
  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
          const userId = localStorage.getItem("userId"); // Retrieve userId
          
          if (!userId) {
              toast.error("User ID not found. Please log in.");
              return;
          }
  
          const response = await axios.get(`https://moviemate-backend-tpz4.onrender.com/watchlist?userId=${userId}`, {
              withCredentials: true,
          });
          console.log("Watchlist API Response:", response.data); 
  
          setMovies(response.data);
      } catch (error) {
          toast.error("Error fetching watchlist");
      }
  };
  
    fetchWatchlist();
  }, []);
   

  return (
    <main>
  <section className="max-w-7xl mx-auto py-7">
  <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white tracking-wide  pb-2">
  Your Watchlist
</h1>

    <div className="flex flex-wrap justify-evenly other:justify-start">
      {movies.length > 0 ? (
        movies.map((item) => <Card key={item.movie.id} movie={item.movie} />)
      ) : (
        <p className="text-center w-full text-gray-500">Your watchlist is empty.</p>
      )}
    </div>
  </section>
</main>

  );
};
