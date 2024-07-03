import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import MyNavBar from "./components/MyNavBar";
import Galleria from "./components/Gallerie";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TvShows from "./components/TvShows";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="App bg-body-tertiary " data-bs-theme="dark">
      <BrowserRouter>
        <Container>
          <MyNavBar />
          <Routes>
            <Route path="/" element={<Galleria />} />
            <Route path="/TvShows" element={<TvShows />} />
            <Route path="/TvShows/Details/:movieId" element={<MovieDetails />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
