import { Col, Row, Spinner } from "react-bootstrap";
import GenereBtn from "./GenereBtn";
import SingleMovie from "./SingleMovie";
import MyFooter from "./MyFooter";
import { useEffect, useState } from "react";

const bcs = "http://www.omdbapi.com/?apikey=64766599&s=better call saul";

const TvShows = () => {
  /* state = {
        movies1: [],
        movies2: [],
        movies3: [],
        loading1: true,
        loading2: true,
        loading3: true,
      }; */
  const [tvShow1, setTvShow1] = useState([]);
  const [loading1, setLoading1] = useState(true);

  const FetchTvShows = async () => {
    try {
      const resp = await fetch(bcs);
      if (resp.ok) {
        const movies1 = await resp.json();
        if (movies1.Search) {
          setTvShow1(movies1.Search), setLoading1(false);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    FetchTvShows();
  }, []);

  return (
    <>
      <GenereBtn />
      <h5 className="text-white mt-4 text-start">Tv Show</h5>
      {loading1 ? (
        <Spinner animation="border" variant="light" />
      ) : (
        <Row>
          {tvShow1.slice(0, 6).map((movie) => (
            <Col key={movie.imdbID} className="text-white" xs={12} lg={4} xl={2}>
              <SingleMovie movie={movie} />
            </Col>
          ))}
        </Row>
      )}

      <MyFooter />
    </>
  );
};

export default TvShows;
