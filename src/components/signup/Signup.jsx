import React,{useState} from 'react'

import "./Signup.css"
import { Link } from "react-router-dom";

const Signup = () => {

  const [user,setUser]=useState({
    email:"",
    password:"",
    reEnterPassword:""
  })
  const handleChange = (e) => {
    const{name,value}=e.target
    setUser({
      ...user,
      [name]:value
    })
  
  }
  



  return (

    
    <div className='signupp'>
      {console.log("User",user)}
        <div className="bg"></div>

<form>
  <div className="form-field">
    <input type="email" name="email" value={user.email} placeholder="Email" required onChange={handleChange}/>
  </div>
  
  <div className="form-field">
    <input type="password" name="password" value={user.password} placeholder="Enter password" required onChange={handleChange}/>
  </div>
  <div className="form-field" id="conpass" >
    <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Confirm password" required onChange={handleChange}/>
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
