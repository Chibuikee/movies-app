function Movieinfo({ Info }) {
  return (
    <div className="xxs:w-[280px] mt-10 s:mt-[initial] flex flex-col gap-4 text-sm ">
      <div className="flex gap-20">
        <h6>Rating:</h6>
        <h6 className="font-semibold ml-[auto]">{Info.vote_average}</h6>
      </div>
      <div className="flex gap-20">
        <h6>Release year:</h6>
        <h6 className="font-semibold ml-[auto]">{Info.release_date}</h6>
      </div>
      <div className="flex justify-between">
        <h6>Genre:</h6>
        <div className="flex gap-2 ml-[auto]">
          {Info.genres?.map((item) => (
            <h6 key={item.id} className="font-semibold">
              {item.name}
            </h6>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <h6>production countries:</h6>
        <div className="flex justify-end gap-2 ml-[auto]">
          {Info.production_countries?.map((item) => (
            <h6 key={item.iso_3166_1} className="font-semibold">
              {item.name}
            </h6>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <h6>Duration</h6>
        <h6 className="font-semibold truncate">{Info.runtime}</h6>
      </div>
    </div>
  );
}

export default Movieinfo;
