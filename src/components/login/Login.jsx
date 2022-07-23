import React from 'react'
import { Link } from "react-router-dom";
import './Login.css'
const Login = () => {
  return (
    <div className='loginp'>
        <div className="bg"></div>

<form>
  <div className="form-field">
    <input type="email" placeholder="Email / Username" required/>
  </div>
  
  <div className="form-field">
    <input type="password" placeholder="Password" required/> </div>
  
  <div class="form-field">
    <button className="btn" type="submit">Log in</button>
    <Link className="nav-link active" to="/home"><button className="btn" type="submit">Back</button></Link>
    
  </div>
</form>

    </div>
  )
}

export default Login