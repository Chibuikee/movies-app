import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());
const apikey = process.env.NEXT_PUBLIC_VERCEL_ENV_NEWS_KEY;

export const useMoviesSearch = (id) => {
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/${id}`,
    fetcher
  );
  return { movieList: data?.results, isError: error, isLoading };
};

export const useFetchMovie = (id) => {
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`,
    fetcher
  );
  return { movieList: data, isError: error, isLoading };
};
