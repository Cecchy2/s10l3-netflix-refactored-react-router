import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import MyNavBar from "./components/MyNavBar";
import Galleria from "./components/Gallerie";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App bg-body-tertiary " data-bs-theme="dark">
      <BrowserRouter>
        <Container>
          <MyNavBar />
          <Routes>
            <Route path="/" element={<Galleria />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
