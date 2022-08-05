import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  return (
<nav className="navbar sticky-top navbar-expand-lg bg-light">
  <div className="container">
  <Link className="nav-link active" to="/home"><a className="navbar-brand">Dust-In</a></Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link active" to="/home">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/about">About</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/services">Services</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/contact">Contact</Link>
        </li>
        <li className="shop">
          <Link className="nav-link active" to="/login">
          <button type="button" className="btn btn-success">Shop</button>

          </Link>
            
        </li>
        
      </ul>
    </div>
    <li className="account">
    <Link className="nav-link active" to="/home">
          <a className="account">
          <button type="button" className="btn btn-success">Account
          <div class="dropdown-content">
          <Link className="nav-link active" to="/login">Login</Link>
          <Link className="nav-link active" to="/signup">Signup</Link>
          <Link className="nav-link active" to="/dashboard">Dashboard</Link>
          </div>
          </button>
            </a> 
            </Link>
        </li>
  
  </div>
</nav>

  )
}

export default Navbar;