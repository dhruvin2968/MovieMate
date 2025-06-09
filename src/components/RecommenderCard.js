import React from "react";
export const CardLite = ({ movie }) => {
  const { title, overview,poster_path } = movie;

  return (
    <div className="max-w-sm bg-white border rounded-lg shadow-md p-4 m-4 dark:bg-black dark:border-gray-700 dark:text-white">
      {/* <img className="rounded-t-lg" src={imgpth} alt={title} /> */}
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
       <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview}
        </p>
    </div>
  );
};
