import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css'
const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    <a className="navbar-brand" href="#">Dust-In</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="shop">
          <a className="shop" href="#">
          <button type="button" className="btn btn-success">Shop</button>

            </a>
            
        </li>
        
      </ul>
    </div>
    <li className="account">
          <a className="account" href="#">
          <button type="button" className="btn btn-success">Account</button>

            </a>
            
        </li>
  
  </div>
</nav>

  )
}

export default Navbar;