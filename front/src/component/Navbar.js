import React from "react";
import "../styles/navbar.css";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              id="MDB-logo"
              src="https://mdbcdn.b-cdn.net/wp-content/uploads/2018/06/logo-mdb-jquery-small.png"
              alt="MDB Logo"
              draggable="false"
              height="30"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-3">
              <li className="nav-item">
                <Link
                  className="nav-link active d-flex align-items-center"
                  aria-current="page"
                  to="/"
                >
                  <i className="fas fa-bars pe-2"></i>Menu
                </Link>
              </li>
            </ul>

            <form className="d-flex align-items-center w-100 form-search">
              <div className="input-group">
                <button
                  className="btn btn-light dropdown-toggle shadow-0"
                  type="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                  style={{ paddingBottom: "0.4rem" }}
                >
                  All
                </button>
                <ul className="dropdown-menu dropdown-menu-dark fa-ul">
                  <li>
                    <Link className="dropdown-item" to="/">
                      <span className="fa-li pe-2">
                        <i className="fas fa-search"></i>
                      </span>
                      All
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      <span className="fa-li pe-2">
                        <i className="fas fa-film"></i>
                      </span>
                      Titles
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      <span className="fa-li pe-2">
                        <i className="fas fa-tv"></i>
                      </span>
                      TV Episodes
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      <span className="fa-li pe-2">
                        <i className="fas fa-user-friends"></i>
                      </span>
                      Celebs
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      <span className="fa-li pe-2">
                        <i className="fas fa-building"></i>
                      </span>
                      Companies
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      <span className="fa-li pe-2">
                        <i className="fas fa-key"></i>
                      </span>
                      Keywords
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      <span className="fa-li pe-2">
                        <i className="fas fa-search-plus"></i>
                      </span>
                      Advanced search
                      <i className="fas fa-chevron-right ps-2"></i>
                    </Link>
                  </li>
                </ul>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              <Link to="/" className="text-white">
                <i className="fas fa-search ps-3"></i>
              </Link>
            </form>

            <ul className="navbar-nav ms-3">
              <li className="nav-item me-3">
                <Link className="nav-link d-flex align-items-center" to="/">
                  IMDbPro
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link d-flex align-items-center me-3"
                  to="/"
                >
                  <i className="fas fa-bookmark pe-2"></i> Watchlist
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
