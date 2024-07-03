import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import MyFooter from "./MyFooter";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=64766599&i=${movieId}`);
      if (response.ok) {
        const details = await response.json();
        setMovieDetails(details);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [movieId]);

  return (
    <div className="movie-details">
      {loading ? (
        <Spinner animation="border" variant="light" />
      ) : (
        movieDetails && (
          <div className="text-white mt-5">
            <Row>
              <Col xs={6}>
                <img src={movieDetails.Poster} alt={movieDetails.Title} />
              </Col>
              <Col xs={3} className="mt-5">
                <h1>{movieDetails.Title}</h1>
                <p>{movieDetails.Plot}</p>
              </Col>
            </Row>
            <MyFooter />
          </div>
        )
      )}
    </div>
  );
};

export default MovieDetails;
