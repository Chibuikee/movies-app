import { useMovies } from "@/component/hooks";
import React, { useState } from "react";
import Image from "next/image";
import { moviesGenres } from "../../component/moviesData";

function MoviesHomePage() {
  const { movieList, isError, isLoading } = useMovies("movie");

  if (isLoading) return <h1>Please wait while the movies are fetched</h1>;
  if (isError) return <h1>An error occured. Please refrech your browser</h1>;
  console.log(movieList);
  return (
    <section>
      <div>
        {moviesGenres.map((item, key) => (
          <h3 key={key} className="text-[blue] text-center">
            {item.name}
          </h3>
        ))}
      </div>
      <div>
        <input type="text" placeholder="Search movies" />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {movieList.map((item, key) => (
          <div key={key} className="card overflow-hidden relative">
            <div className="poster">
              <Image
                className=""
                width={500}
                height={500}
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt="Movie poster"
              />
            </div>
            <h1 className="w-full bg-[purple]">DETAILS</h1>
            <div className="details text-[white]">
              <h3>{item.media_type}</h3>
              <h3>Release Date:{item.release_date}</h3>
              <h3>{item.original_title}</h3>
              <h3>{item.title}</h3>
              <h3>{item.vote_average}</h3>
              <h3 className="text-xs text-[purple]">{item.overview}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MoviesHomePage;
