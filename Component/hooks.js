import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());
export const useMovies = (id) => {
  //   const hi = "78275e78ca363bb907ddd43cfcf1ebb3";
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/trending/${id}/day?api_key=78275e78ca363bb907ddd43cfcf1ebb3`,
    fetcher
  );
  return { movieList: data?.results, isError: error, isLoading };
};
