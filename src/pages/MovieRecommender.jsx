import React, { useEffect, useState } from "react";
import { CardLite } from "../components/RecommenderCard"

const API_URL = "http://127.0.0.1:5000/recommend"; // Your Flask backend

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
        if (!res.ok) throw new Error("Movie not found or API error");
        return res.json();
      })
      .then((data) => {
        setRecommendations(data);
        console.log(data)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [movieTitle]); // re-fetch if watchlist changed

  if (loading) return <p>Loading recommendations...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (recommendations.length === 0) return null;

  return (
    <div>
      <h3>You May Also Like</h3>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {recommendations.map((movie) => (
          // <Card key={movie.id} movie={movie} state={state} setState={setState} />
          <CardLite movie={movie} />

        ))}
      </div>
    </div>
  );
}
