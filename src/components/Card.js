
import { Link } from "react-router-dom";
import Backupimgsathi from "./img.jpeg";
export const Card = ({movie}) => {
  const{id,original_title, overview, poster_path}=movie;
  const imgpth=poster_path?`https://image.tmdb.org/t/p/w500/${poster_path}`:Backupimgsathi;
  return (  
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm shadow-black dark:shadow-white dark:bg-black dark:border-gray-400  m-4">
            <Link to={`/movie/${id}`}>
              <img className="rounded-t-lg" src={imgpth} alt="" />
            </Link>
            <div className="p-5">
              <Link to={`/movie/${id}`}> 
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>            
            </div>
          </div>  
  )
}
