import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());
// export const useMovies = (id) => {
//   const hi = "78275e78ca363bb907ddd43cfcf1ebb3";
//   const { data, error, isLoading } = useSWR(
//     `https://api.themoviedb.org/3/discover/movie?api_key=78275e78ca363bb907ddd43cfcf1ebb3&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_watch_monetization_types=flatrate`,
//     fetcher
//   );
//   return { movieList: data?.results, isError: error, isLoading };
// };

export const useMoviesSearch = (id) => {
  //   const hi = "78275e78ca363bb907ddd43cfcf1ebb3";
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/${id}`,
    fetcher
  );
  return { movieList: data?.results, isError: error, isLoading };
};

// export const useMoviesgenre = (id) => {
//   //   const hi = "78275e78ca363bb907ddd43cfcf1ebb3";
//   const { data, error, isLoading } = useSWR(
//     `https://api.themoviedb.org/3/discover/movie?api_key=78275e78ca363bb907ddd43cfcf1ebb3&with_genres=${id}`,
//     fetcher
//   );
//   return { movieList: data?.results, isError: error, isLoading };
// };

export const useFetchMovie = (id) => {
  //   const hi = "78275e78ca363bb907ddd43cfcf1ebb3";
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}?api_key=78275e78ca363bb907ddd43cfcf1ebb3`,
    fetcher
  );
  return { movieList: data, isError: error, isLoading };
};
