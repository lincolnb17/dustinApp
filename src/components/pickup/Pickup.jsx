import React from 'react'
import { Link } from "react-router-dom";
import "./Pickup.css"
const Pickup = () => {
  return (
    <div class="containers">
		
		<div class="contact-box">
			
			<div class="leftp"></div>
			<div class="rightp">
      <Link className="nav-link active" to="/profile"><button className="btnp">Back</button></Link>
				<h2>Pickup Request Form</h2>
				
				<input type="text" class="fieldp" placeholder="Name"></input>
				<input type="text" class="fieldp" placeholder="City"></input>
				<input type="text" class="fieldp" placeholder="Address"></input>
				<input type="text" class="fieldp" placeholder="Tol"></input>
				<input type="text" class="fieldp" placeholder="House No."></input>
				<input type="number" class="fieldp" placeholder="Phone"></input>
				<input type="date" class="fieldp" placeholder="Pickup Date"></input>
				<button class="btnp">Submit</button>
				
			</div>
		</div>
	</div>
  )
}

export default Pickup