import React from 'react'
import "./Profile.css"
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
  <a className="navbar-brand" href="#"> My Profile</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">

      <li className="shop">
          <Link className="nav-link active" to="/shop">
          <button type="button" className="btn btn-success">Shop</button>

          </Link>
            
        </li>
        
      <li className="shop">
          <Link className="nav-link active" to="/pickup">
          <button type="button" className="btn btn-success">Request to Pickup</button>

          </Link>
            
        </li>
        
      <li className="shop">
          <Link className="nav-link active" to="/home">
          <button type="button" className="btn btn-success">Logout</button>

          </Link>
            
        </li>

    </div>
  </div>
</nav>




    </div>
  )
}

export default Profile