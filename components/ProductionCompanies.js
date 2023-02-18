import Image from "next/image";
import { useState } from "react";
function ProductionCompanies({ companyInfo }) {
  const [infoDrop, setInfodrop] = useState(true);
  return (
    <div className="">
      <div>
        <h3 className="font-semibold">Production Companies</h3>
        <div className="">
          {companyInfo.production_companies
            ?.slice(0, infoDrop ? 1 : undefined)
            .map((item) => (
              <div
                key={item.id}
                className="flex gap-2 px-4 py-2 bg-[#fcfcfc] w-[280px] mb-5"
              >
                <div className="w-[30px] h-[20px]">
                  <div className="w-[30px] h-[20px]">
                    <Image
                      className="rounded-full"
                      width={50}
                      height={50}
                      src={
                        item.logo_path === null
                          ? "https://source.unsplash.com/random"
                          : `https://image.tmdb.org/t/p/original${item.logo_path}`
                      }
                      alt="Movie poster"
                    />
                  </div>
                </div>
                <div className="text-xs">
                  <h6>{item.name}</h6>
                  <h6>{item.origin_country}</h6>
                </div>
              </div>
            ))}
        </div>
        <button
          className="bg-[red] py-1 px-2 rounded"
          onClick={() => setInfodrop((st) => !st)}
        >
          {infoDrop ? "See More" : "See less"}
        </button>
      </div>
      <div className="mt-5 ">
        <h3 className="font-bold">OVERVIEW</h3>
        <p className="text-sm xs:w-[280px]">{companyInfo.overview}</p>
      </div>
    </div>
  );
}

export default ProductionCompanies;
