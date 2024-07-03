import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import MyFooter from "./MyFooter";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imdb, setImdb] = useState("");
  const [reviews, setReviews] = useState([]);

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=64766599&i=${movieId}`);
      if (response.ok) {
        const details = await response.json();
        console.log(details);
        setMovieDetails(details);
        setLoading(false);
        setImdb(details.imdbID);
        fetchComments(details.imdbID);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchComments = async (imdbId) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${imdbId}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZjlhOTdjMjM5YzAwMTUyZjRiM2QiLCJpYXQiOjE3MjAwMTUzNjYsImV4cCI6MTcyMTIyNDk2Nn0.rgj31Ok017jPG_rhlJkAupaBCr849UWEW0ydNSADBI4",
        },
      });
      if (response.ok) {
        const comments = await response.json();
        console.log(comments);
        setReviews(comments);
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
              <Col xs={4}>
                <img src={movieDetails.Poster} alt={movieDetails.Title} />
              </Col>
              <Col xs={4}>
                <h1>{movieDetails.Title}</h1>
                <p>{movieDetails.Plot}</p>
              </Col>
              <Col xs={4}>
                <h4 className="display-6">Recensioni:</h4>
                {reviews.length > 0 ? (
                  reviews.map((review) => (
                    <Card key={review._id}>
                      <Card.Body>
                        <Card.Title>{review.elementId}</Card.Title>
                        <Card.Text>{review.comment}</Card.Text>
                        <Card.Text>Voto {review.rate}</Card.Text>
                      </Card.Body>
                    </Card>
                  ))
                ) : (
                  <p>Ancora nessuna recensione</p>
                )}
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
