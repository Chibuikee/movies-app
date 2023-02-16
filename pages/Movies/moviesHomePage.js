import React from "react";
import { moviesGenres } from "../../Component/moviesData";

function MoviesHomePage() {
  return (
    <section>
      <div>
        {moviesGenres.map((item, key) => (
          <h3 key={key}>{item.name}</h3>
        ))}
      </div>
      <div>
        <input type="text" placeholder="Search movies" />
      </div>
    </section>
  );
}

export default MoviesHomePage;
