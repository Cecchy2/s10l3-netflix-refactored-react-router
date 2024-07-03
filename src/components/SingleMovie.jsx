import React from "react";
import { Card } from "react-bootstrap";

const SingleMovie = ({ movie }) => (
  <div className="movie-container">
    <Card>
      <Card.Img src={movie.Poster} alt={movie.Title} />
    </Card>
    <div className="movie-info">
      <Card.Title className="fs-6 mb-3 text-warning">{movie.Title}</Card.Title>
    </div>
  </div>
);

export default SingleMovie;
