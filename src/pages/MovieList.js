
import { Card } from "../components"
import { useFetch } from "../hooks/useFetch"
import { useTitle } from "../hooks/useTitle";
import { jwtDecode } from "jwt-decode"; // ✅ correct

import { useEffect} from "react";
import toast from "react-hot-toast"
export const MovieList = ({apiPath,title}) => {
   
  
  //Now we send fetch request to url and have info stored in movies using setmovies
   const {data:movies}=useFetch(apiPath); //This is the fetch request
   useTitle(title);
  

   useEffect(() => {
    const checkTokenExpiry = () => {
      const token = localStorage.getItem("token");
      if (!token) return false;
  
      const { exp } = jwtDecode(token); // exp = expiry in seconds
      const isExpired = Date.now() >= exp * 1000;
  
      if (isExpired) {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        toast.error("Session expired. Please log in again.");
        // Redirect after some delay to avoid reload loop
        setTimeout(() => window.location.href = "/login", 1000);
        return false;
      }
  
      return true;
    };
  
    checkTokenExpiry();
  }, []); // Runs only once on component mount
  
  
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex flex-wrap justify-evenly other:justify-start">
        {
          movies&&movies.map((movie)=>(
            
            //<Card key={movie.id} movie={movie}/>
            <Card key={movie.id} movie={movie} state={movies} setState={() => {}} />

          ))
        } 
        
      
        </div>
      </section>
    </main>
  )
}
