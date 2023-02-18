import React, { useState } from "react";
import { useMoviesSearch } from "../../components/hooks";
import MovieCard from "../../components/MovieCard";
import { moviesGenres } from "../../components/moviesData";

function MoviesHomePage() {
  const [currentlyDisplayed, setCurrentlyDisplayed] = useState();
  const [currentGenre, setCurrentgenre] = useState([]);
  const apikey = process.env.NEXT_PUBLIC_MOVIE_DB;
  const release_date = `discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=2&primary_release_year=${currentlyDisplayed}&with_watch_monetization_types=flatrate`;
  const discover = `movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_watch_monetization_types=flatrate`;
  const genre = `discover/movie?api_key=${apikey}&with_genres=${currentGenre.toString()}`;
  const search = `search/movie?api_key=${apikey}&query=${currentlyDisplayed}&page=1`;
  const { movieList, isError, isLoading } = useMoviesSearch(
    currentlyDisplayed && !isNaN(currentlyDisplayed)
      ? release_date
      : currentlyDisplayed && typeof currentlyDisplayed == "string"
      ? search
      : currentGenre
      ? genre
      : discover
  );
  //   function checkType  (id){
  // const result = typeof id =="number"? release_date:search
  //   }
  // console.log(!isNaN(currentlyDisplayed));
  function pickGenre(id) {
    setCurrentgenre((state) => {
      function checkState(st, id) {
        const newArray = [...st];
        newArray.splice(newArray.indexOf(id), 1);
        return newArray;
      }
      const newState = state.includes(id)
        ? checkState(state, id)
        : [...state, id];

      return newState;
    });
  }

  if (isError) return <h1>An error occured. Please refrech your browser</h1>;
  return (
    <section className=" pb-10">
      <div className=" left-0 mmd:fixed overflow-y-scroll">
        <div className=" p-[10px] mt-[80px]">
          <div className="flex flex-wrap gap-1 justify-center items-center">
            {moviesGenres.map((item) => (
              <button
                key={item.id}
                onClick={() => pickGenre(item.id)}
                className={`text-[#ffffff] my-1 px-4 py-1 rounded ${
                  currentGenre.includes(item.id) ? "bg-[blue]" : "bg-[red]"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <div className="w-[200px] mx-auto z-10 fixed top-6 right-3 ">
          <input
            onChange={(e) => setCurrentlyDisplayed(e.currentTarget.value)}
            placeholder="Movie Year / Title"
            className="border border-solid border-[blue] p-1 mt-5 rounded"
            value={currentlyDisplayed}
          />
        </div>
        <div className="mmd:overflow-scroll h-[450px] mt-[10px] pb-10 px-[20px]">
          {isLoading ? (
            <div className="flex justify-center items-center h-[100vh]">
              <div className="loading-spinner"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 xxxs:grid-cols-2 xxs:grid-cols-4 mmd:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-2">
              {movieList?.map((item, key) => (
                <MovieCard key={key} moviedataList={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default MoviesHomePage;
