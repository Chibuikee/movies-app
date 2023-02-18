import { useFetchMovie } from "component/hooks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function Moviedetail() {
  const router = useRouter();
  const movieid = router.query.Moviedetail;
  const { movieList, isError, isLoading } = useFetchMovie(movieid);
  console.log(movieList);
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <div className="loading-spinner"></div>
      </div>
    );
  if (isError) return <h1>An error occured. Please refrech your browser</h1>;
  return (
    <section>
      <div>
        <Link href="/">Go Home</Link>
        <div className="">
          <Image
            className=""
            width={500}
            height={500}
            src={`https://image.tmdb.org/t/p/w500${movieList.poster_path}`}
            alt="Movie poster"
          />
        </div>
      </div>
    </section>
  );
}

export default Moviedetail;
