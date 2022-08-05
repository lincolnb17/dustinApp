import React from 'react'
import './Banner.css'
import { Link } from "react-router-dom";
const Banner = () => {
  return (
            <div className="bimg">
                <div className="banner">
                <div className="container">
                <div className="text-1">Waste Disposal management &</div> 
                <div className="text-2"> pickup services</div>
                <div className="text-3"> <span>"The greatest threat to our planet is the belief that someone<br></br>else will save it"</span></div>
                <Link className="nav-link active" to="/login"><button type="button" className="btn btn-secondary btn-light">Request A Pickup</button></Link>


            </div>
            </div>
        </div>


  )
}

export default Banner