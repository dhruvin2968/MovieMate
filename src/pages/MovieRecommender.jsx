import React, { useEffect, useState } from "react";
import { CardLite } from "../components/RecommenderCard"

//const API_URL = "https://dhruvin2968-movie-recommender.hf.space/recommend"; 
const API_URL = "https://dhruvin2968-movie-recommendation-system.hf.space/recommend";

export default function MovieRecommendations({ movieTitle }) {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieTitle) return;
    setLoading(true);
    setError(null);

    fetch(`${API_URL}?title=${encodeURIComponent(movieTitle)}`)
      .then((res) => {
        if (!res.ok) throw new Error("This movie is not in the trained dataset");
        return res.json();
      })
      .then((data) => {
        setRecommendations(data);
       
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [movieTitle]); // re-fetch if watchlist changed

  if (loading) return <p style={{ fontStyle: "italic", color: "#555" }}>Loading recommendations...</p>;
if (error) return <p style={{ color: "red" }}>{error}</p>;

  if (recommendations.length === 0) return null;

return (
  <div className="my-8">
    <h3 className="text-3xl mt-4 font-semibold mb-4 text-gray-800 dark:text-white">
      You May Also Like  
    </h3>
    <div className="flex flex-wrap gap-6 justify-start">
      {recommendations.map((movie) => (
        <CardLite key={movie.id} movie={movie} />
      ))}
    </div>
  </div>
);

}
