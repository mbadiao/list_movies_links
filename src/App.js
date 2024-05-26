import React from "react";
import { useState } from "react";
import "./index.css";
import ButtonTheme from "./components/ButtonTheme";
import { Movies } from "./components/Movies";
import Dropdown from "./components/Dropdown";
import MoviesList from "./components/MoviesList";
import AddMovies from "./components/AddMovies";
const App = () => {
  const [sortBy, setSortBy] = useState("");
  return (
    <>
      <div className="flex justify-between p-5">
        <ButtonTheme />
        <div className="flex px-5 items-center">
          <AddMovies />
          <Dropdown setSortBy={setSortBy} />
        </div>
      </div>
      <div className="flex  flex-wrap justify-center items-center">
        <MoviesList movies={Movies} sortBy={sortBy} />
      </div>
    </>
  );
};

export default App;
