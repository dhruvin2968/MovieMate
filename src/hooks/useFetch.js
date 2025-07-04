// import { useEffect, useState } from "react";
// export const useFetch = (apiPath,queryTerm="") => {  //so now for each route, api request is different as per their path
//                                         //we are fetching this info and storing it inside movie
//                                         //as seen in MovieList page

//                                          //by default query term is empty 
//                                         // if any query is passed the page should be displayed accordingly


//     const [data, setData] = useState([]);
//     const url= `https://api.themoviedb.org/3/${apiPath}?api_key=943312ba32879486a085fc603420fc73&query=${queryTerm}&page=1`
//     // so in most cases in url query term remains empty 
//     // else works accordingly
//     // u can create differnt fetches but we have resued it 

//     useEffect(() => {
//         async function fetchMovies() 
//         {
//             const response = await fetch(url);  //the data that we fetch is theobject inside object we have dates, pages, results then we store it in setMovies
//             const json = await response.json();
//             setData(json.results);
//         }
//         fetchMovies();
//     }, [url]
//     )

//     return { data }
// }

import { useEffect, useState } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);

  const backendBaseUrl = "https://moviemate-backend-tpz4.onrender.com"; // or your deployed backend URL

  const url = `${backendBaseUrl}/api/tmdb/${apiPath}?query=${queryTerm}&page=1`;

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json.results || []);
      } catch (err) {
        console.error("Error fetching movies:", err);
        setData([]);
      }
    }

    fetchMovies();
  }, [url]);

  return { data };
};
