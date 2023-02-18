import Image from "next/image";
import { useRouter } from "next/router";
function MovieCard({ moviedataList }) {
  const router = useRouter();
  // console.log(moviedataList);
  function opendetails() {
    router.push(`Movies/${moviedataList.id}`);
  }
  return (
    <div
      onClick={() => opendetails(moviedataList.id)}
      className="card overflow-hidden relative"
    >
      <div className="poster">
        <Image
          className=""
          width={500}
          height={500}
          src={`https://image.tmdb.org/t/p/w500${moviedataList.poster_path}`}
          alt="Movie poster"
        />
      </div>
      <h1 className="w-full bg-[purple]">DETAILS</h1>
      <div className="details">
        <h3>{moviedataList.media_type}</h3>
        <h3>Release Date:{moviedataList.release_date}</h3>
        <h3>{moviedataList.original_title}</h3>
        <h3>{moviedataList.title}</h3>
        <h3>{moviedataList.vote_average}</h3>
        <h3 className="text-xs text-[purple]">{moviedataList.overview}</h3>
      </div>
    </div>
  );
}

export default MovieCard;
