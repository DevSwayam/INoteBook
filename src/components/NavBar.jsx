import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const NavBar = (props) => {
  const navigate = useNavigate();
  let location = useLocation();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary "
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          NoteBook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <Link
                className={`nav-link mx-3 text-white my-1 ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                aria-current="page"
                to="/about"
              >
                About
              </Link>
              <Link
                className={`nav-link mx-3 text-white my-1 ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <Link
                  className=
                  {localStorage.getItem("token")?
                  "disabled  btn btn-primary mx-2 my-1"
                :"btn btn-primary mx-2 my-1"}
                   to="signup"
                   role="button"
                   
                >
                  Login
                </Link>
            </li >
            <li className="nav-item">
                 <Link
                className=
                 {localStorage.getItem("token")?
                 "disabled  btn btn-primary mx-2 my-1"
               :"btn btn-primary mx-2 my-1"}
                  to="signup"
                  role="button"
                  
                >
                  SignUp
                </Link>
            </li>
            <li className="nav-item">
                  <button
                  onClick={handleLogOut}
                  type="button"
                  className=
                  {!localStorage.getItem("token")?
                  "disabled  btn btn-primary mx-2 my-1"
                :"btn btn-primary mx-2 my-1"}
                >
                  Log Out
                </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
