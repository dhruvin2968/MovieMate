//We are going to first fetch the query using search param
//and then we pass that info in usefetch.. we refer movieList pg to make this fast
import { useSearchParams } from "react-router-dom";
import { Card } from "../components"
import { useFetch } from "../hooks/useFetch"
import { useTitle } from "../hooks/useTitle";

export const Search = ({apiPath}) => {
                                          //useSearchParams returns an array 1st term is q=queryterm and 2nd is the function toupdate it since we re interested onluy in the query term we extract and use it
  const [searchParams]=useSearchParams();  //searchParams stores "q=queryTerm"
  const queryTerm=searchParams.get("q"); //the queryTerm gets extracted and stored in the variable queryTerm
  const {data:movies}=useFetch(apiPath,queryTerm);//this is fetch request

  useTitle(`Search for ${queryTerm}`)
  
  return (
    <main>

    <section className="py-7">
      <p align="center" className="text-3xl text-gray-700 dark:text-white">
        {movies.length === 0 ? `No movies found for "${queryTerm}"`: `Results for  "${queryTerm}"`}
      </p>
    </section>

      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
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
