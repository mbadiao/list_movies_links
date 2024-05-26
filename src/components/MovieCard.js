import React from "react";

const MovieCard = ({title, description,posterURL,rating}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl h-[63vh] m-5">
      <figure>
        <img className="rounded-lg w-full h-[33vh]"
          src={posterURL}
          alt="Poster"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">rate {rating}</button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
