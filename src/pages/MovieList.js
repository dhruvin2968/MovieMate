
import { Card } from "../components"
import { useFetch } from "../hooks/useFetch"
import { useTitle } from "../hooks/useTitle";
export const MovieList = ({apiPath,title}) => {
   
  
  //Now we send fetch request to url and have info stored in movies using setmovies
   const {data:movies}=useFetch(apiPath); //This is the fetch request
   useTitle(title);
  
 

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex flex-wrap justify-evenly other:justify-start">
        {
          movies&&movies.map((movie)=>(
            
            <Card key={movie.id} movie={movie}/>
            
          ))
        }
        
      
        </div>
      </section>
    </main>
  )
}
