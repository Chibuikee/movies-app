import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useFetchMovie } from "../../components/hooks";
import Movieinfo from "../../components/Movieinfo";
import ProductionCompanies from "../../components/ProductionCompanies";

function Moviedetail() {
  const router = useRouter();
  const movieid = router.query.Moviedetail;
  const { movieList, isError, isLoading } = useFetchMovie(movieid);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <div className="loading-spinner"></div>
      </div>
    );
  if (isError) return <h1>An error occured. Please refrech your browser</h1>;
  return (
    <section className="h-[100vh]">
      <div className="px-5 s:px-10 py-5">
        <Link href="/">
          <div className="py-1 px-5 bg-[red] inline-block mb-5">Home</div>
        </Link>
        <div className=" xs:flex gap-10 md:gap-20">
          <div className="max-w-[450px] s:max-w-[250px] pc:max-w-[350px] ">
            <Image
              className=""
              layout="responsive"
              width="200"
              height="100"
              src={`https://image.tmdb.org/t/p/original${movieList.poster_path}`}
              alt="Movie poster"
            />
          </div>
          <div>
            <div className="mb-5">
              <h1 className="text-2xl font-semibold text-[red] ">
                {movieList.original_title}
              </h1>
            </div>
            <div className="s:flex s:flex-col pc:flex-row gap-5">
              {<ProductionCompanies companyInfo={movieList} />}
              {<Movieinfo Info={movieList} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Moviedetail;
