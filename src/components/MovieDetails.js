import React from "react";
import { useParams } from "react-router-dom";
import { Movies } from "./Movies";
import { useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const movie = Movies.find((movie) => movie.id === parseInt(id));
  const navigate = useNavigate();

  const GoHome = () => {
    navigate('/');
  };

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <>
      <button className="btn btn-primary m-5" onClick={GoHome}>Go Back Home</button>
      <div className="h-[100vh] flex flex-col justify-center items-center">
    <iframe width="953" height="536" src={movie.trailer} className="rounded-xl"
    title={movie.title}
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div className="w-[60vw] my-5 left-0">
          <div className="flex justify-between">
          <h1 className="font-extrabold text-4xl my-2">{movie.title}</h1>
          <h2>Rate {movie.rating}</h2>
          </div>
          <p>{movie.description}</p>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
