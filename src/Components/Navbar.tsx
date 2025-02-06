import React from 'react'
import { Link, useNavigate , useLocation } from 'react-router-dom';



export default function Navbar() {
    const auth = localStorage.getItem("token");
    const location = useLocation();
    const navigate = useNavigate();
    const handleclick = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Stack Overflow</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/product" ? "active" : ""}`}  to="/product">Product</Link>
        </li>
      </ul>
      <form className="d-flex mx-5" >
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success " type="submit">Search</button>
      </form>
          <div className="d-flex">
            {auth ? (
              <Link className="btn btn-primary mx-1" role='button' onClick={handleclick} to="/login">Logout</Link>
            ) : (
              <>
                <Link className="btn btn-primary mx-1" role='button' to="/login">Login</Link>
                <Link className="btn btn-primary mx-1" role='button' to="/register">Signup</Link>
              </>
            )}
          </div>
      
    </div>
  </div>
</nav>
  )
}
