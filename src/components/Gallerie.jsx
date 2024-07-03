import { Component } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import SingleMovie from "./SingleMovie";
import MyFooter from "./MyFooter";
import GenereBtn from "./GenereBtn";

const starWars = "http://www.omdbapi.com/?apikey=64766599&s=star wars";
const piratesOfCaribbean = "http://www.omdbapi.com/?apikey=64766599&s=Pirates of the Caribbean";
const backToTheFuture = "http://www.omdbapi.com/?apikey=64766599&s=back to the future";

class Galleria extends Component {
  state = {
    movies1: [],
    movies2: [],
    movies3: [],
    loading1: true,
    loading2: true,
    loading3: true,
  };

  componentDidMount() {
    this.FetchMovies();
    this.FetchMovies2();
    this.FetchMovies3();
  }

  FetchMovies = async () => {
    try {
      const resp = await fetch(starWars);
      if (resp.ok) {
        const movies1 = await resp.json();
        if (movies1.Search) {
          this.setState({ movies1: movies1.Search, loading1: false });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  FetchMovies2 = async () => {
    try {
      const resp = await fetch(piratesOfCaribbean);
      if (resp.ok) {
        const movies2 = await resp.json();
        if (movies2.Search) {
          this.setState({ movies2: movies2.Search, loading2: false });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  FetchMovies3 = async () => {
    try {
      const resp = await fetch(backToTheFuture);
      if (resp.ok) {
        const movies3 = await resp.json();
        if (movies3.Search) {
          this.setState({ movies3: movies3.Search, loading3: false });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { movies1, movies2, movies3, loading1, loading2, loading3 } = this.state;

    console.log(movies1);
    return (
      <>
        <GenereBtn />
        <h5 className="text-white mt-4 text-start">Guarda la saga di Star Wars</h5>
        {loading1 ? (
          <Spinner animation="border" variant="light" />
        ) : (
          <Row>
            {movies1.slice(0, 6).map((movie) => (
              <Col key={movie.imdbID} className="text-white" xs={12} lg={4} xl={2}>
                <SingleMovie movie={movie} />
              </Col>
            ))}
          </Row>
        )}
        <h5 className="text-white text-start">Guarda Pirates of the Caribbean</h5>
        {loading2 ? (
          <Spinner animation="border" variant="light" />
        ) : (
          <Row>
            {movies2.slice(0, 6).map((movie) => (
              <Col key={movie.imdbID} className="text-white overflow-hidden" xs={12} lg={4} xl={2}>
                <SingleMovie movie={movie} />
              </Col>
            ))}
          </Row>
        )}
        <h5 className="text-white  text-start">Continua a guardare Back to the Future</h5>
        {loading3 ? (
          <Spinner animation="border" variant="light" />
        ) : (
          <Row>
            {movies3.slice(0, 6).map((movie) => (
              <Col key={movie.imdbID} className="text-white overflow-hidden" xs={12} lg={4} xl={2}>
                <SingleMovie movie={movie} />
              </Col>
            ))}
          </Row>
        )}
        <MyFooter />
      </>
    );
  }
}

export default Galleria;
