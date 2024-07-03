import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import netflixLogo from "../logos/netflix_logo.png";
import avatar from "../logos/avatar.png";
import { NavLink } from "react-router-dom";

const MyNavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={netflixLogo} alt="Netflix Logo" style={{ height: "30px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/TvShows" className="nav-link">
              TV Shows
            </NavLink>
            <NavLink to="#link" className="nav-link">
              Movies
            </NavLink>
            <NavLink to="#link" className="nav-link">
              Recently Added
            </NavLink>
            <NavLink to="#link" className="nav-link">
              My List
            </NavLink>
          </Nav>
          <div className="d-flex align-items-center ms-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="white"
              className="bi bi-search mx-3"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <ul className="navbar-nav me-auto mx-3 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Kids
                </a>
              </li>
            </ul>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="white"
              className="bi bi-bell-fill mx-3"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
            </svg>
            <div className="dropdown mx-3 text-white">
              <NavDropdown
                title={<img src={avatar} alt="Avatar" style={{ width: "30px", height: "30px", borderRadius: "50%" }} />}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.3">Setting</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="../../User.jsx">User</NavDropdown.Item>
              </NavDropdown>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;
