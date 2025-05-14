import { Card } from "../components";
import { useEffect, useState } from "react";
import { useTitle } from "../hooks/useTitle";
import axios from "axios";
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom";



export const Watchlist = () => {
  const [movies, setMovies] = useState([]);
  const [state,setState]=useState(true)
  const [username, setUsername] = useState(""); 
  const navigate = useNavigate();
  useTitle("Your Watchlist");
  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
          const storedUsername = localStorage.getItem("username"); 
          setUsername(storedUsername);
          if (!storedUsername) {
              navigate("/")
              toast.error("Please log in.");
              return;
          }
  
          // const response = await axios.get(`https://moviemate-backend-tpz4.onrender.com/watchlist?userId=${userId}`, {
          //     withCredentials: true,
          // });
          // console.log("Watchlist API Response:", response.data); 
          const response= await axios.get("https://moviemate-backend-tpz4.onrender.com/watchlist", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            withCredentials: true,
          });
          
          setMovies(response.data);
      } catch (error) {
          toast.error("Error fetching watchlist");
      }
  };
  
    fetchWatchlist();
  }, [state]);//eslint-disable-line
   

  return (
    <main>
  <section className="max-w-7xl mx-auto py-7">
  <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white tracking-wide pb-2">
  {username&&movies.length > 0 ? `Heyy ${username}! Here's your watchlist` : `Heyy ${username}!`}
          
        </h1>

    <div className="flex flex-wrap justify-evenly other:justify-start">
      {movies.length > 0 ? (
        movies.map((item) => <Card state={state} setState={setState} key={item.movie.id} movie={item.movie} />)
      ) : (
        <h3 className="text-center w-full text-lg font-semibold text-gray-500">
         You watchlist is empty
          
          </h3>
      )}
    </div>
  </section>
</main>

  );
};
