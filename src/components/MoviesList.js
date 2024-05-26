import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
const MoviesList = ({ movies, sortBy }) => {
  // on utilise le hook useState pour définir les films triés
  const [sortedMovies, setSortedMovies] = useState(movies);
  // on utilise le hook useEffect pour trier les films
  useEffect(() => {
    // on crée une copie du tableau de films
    let sorted = [...movies];
    if (sortBy === "name") {
      // on trie les films par ordre alphabétique
      sorted = sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "rating") {
      // on trie les films par note
      sorted = sorted.sort((a, b) => b.rating - a.rating);
    }
    // on met à jour la valeur de sortedMovies
    setSortedMovies(sorted);
  }, [movies, sortBy]);

  return sortedMovies.map((movie) => 
  <MovieCard {...movie} />
);
};

export default MoviesList;
