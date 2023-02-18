import { useMoviesSearch } from "component/hooks";
import MovieCard from "component/MovieCard";
import { moviesGenres } from "component/moviesData";
import React, { useState } from "react";

function MoviesHomePage() {
  const [currentlyDisplayed, setCurrentlyDisplayed] = useState();
  const [currentGenre, setCurrentgenre] = useState([]);
  const apikey = process.env.NEXT_PUBLIC_MOVIE_DB;
  const discover = `movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_watch_monetization_types=flatrate`;
  const genre = `discover/movie?api_key=${apikey}&with_genres=${currentGenre.toString()}`;
  const search = `search/movie?api_key=${apikey}&query=${currentlyDisplayed}&page=1`;
  const { movieList, isError, isLoading } = useMoviesSearch(
    currentlyDisplayed ? search : currentGenre ? genre : discover
  );
  useMoviesSearch;
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
    <section className="px-9">
      <div className="relative  ">
        <div className="fixed max-h-[70vh] w-24 top-[100px] left-0 overflow-scroll">
          <div className=" z-20 h-[100vh]">
            {moviesGenres.map((item) => (
              <button
                key={item.id}
                onClick={() => pickGenre(item.id)}
                className={`text-[#ffffff] my-2 px-4 py-2 rounded ${
                  currentGenre.includes(item.id) ? "bg-[blue]" : "bg-[red]"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <div className="w-[200px] mx-auto z-10 fixed top-6 bg-[red] right-0 left-0">
          <input
            onChange={(e) => setCurrentlyDisplayed(e.currentTarget.value)}
            placeholder="Serach Movies"
            className="border border-solid border-[blue] p-2 mt-5"
            value={currentlyDisplayed}
          />
        </div>
        <div className="overflow-scroll h-[100vh] mt-[100px]">
          {isLoading ? (
            <div className="flex justify-center items-center h-[100vh]">
              <div className="loading-spinner"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 xxs:grid-cols-2 mmd:grid-cols-3 pc:grid-cols-4 gap-2 ml-20">
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
