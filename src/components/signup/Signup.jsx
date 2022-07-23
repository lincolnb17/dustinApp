import React from 'react'
import "./Signup.css"
import { Link } from "react-router-dom";
export const Signup = () => {
  return (
    <div className='signupp'>
        <div className="bg"></div>

<form>
  <div className="form-field">
    <input type="email" placeholder="Email" required/>
  </div>
  
  <div className="form-field">
    <input type="password" placeholder="Enter password" required/>
  </div>
  <div className="form-field" id="conpass" >
    <input type="password" placeholder="Confirm password" required/>
  </div>
  
  <div className="form-field">
    <button className="btn" type="submit">Signup</button>
    <Link className="nav-link active" to="/home"><button className="btn" type="submit">Back</button></Link>
    
  </div>
</form>
    </div>
  )
}
export default Signup
