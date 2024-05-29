import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import ButtonTheme from "./components/ButtonTheme";
import { Movies } from "./components/Movies";
import Dropdown from "./components/Dropdown";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";
const App = () => {
  const [sortBy, setSortBy] = useState("");
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="flex justify-between p-5">
                <ButtonTheme />
                <div className="flex px-5 items-center">
                  <Dropdown setSortBy={setSortBy} />
                </div>
              </div>
              <div className="flex  flex-wrap justify-center items-center">
                <MoviesList movies={Movies} sortBy={sortBy} />
              </div>
            </>
          }
        />
        <Route path="/detail/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
};

export default App;
