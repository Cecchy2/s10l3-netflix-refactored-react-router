import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleMovie = ({ movie }) => (
  <div className="movie-container">
    <Card>
      <Link to={`/TvShows/Details/${movie.imdbID}`}>
        <Card.Img src={movie.Poster} alt={movie.Title} />
      </Link>
    </Card>
    <div className="movie-info">
      <Card.Title className="fs-6 mb-3 text-warning">{movie.Title}</Card.Title>
    </div>
  </div>
);

export default SingleMovie;
