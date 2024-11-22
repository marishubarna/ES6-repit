import React from "react";
import { useState } from "react";

const Movies = [
  "Дух Різдва",
  "Щасливого Різдва",
  "Сам Удома",
  "Крампус: викрадач Різдва",
  "Жах перед Різдвом",
  "Клаус",
];

const Five = () => {
  const [MovieListSearch, setMovieListSearch] = useState("");

  const handelSearch = (e) => {
    setMovieListSearch(e.target.value);
  };

  const Filter = Movies.filter((movie) =>
    movie.toLowerCase().includes(Movies.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Pyfqnb"
        value={MovieListSearch}
        onChange={handelSearch}
      />
      <ul>
        {Filter.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  );
};

export default Five;
