import React,{useState} from 'react'
import { Link } from "react-router-dom";
import './Login.css'



const Login = () => {

  const [user,setUser]=useState({
    email:"",
    password:""
  })
  const handleChange = (e) => {
    const{name,value}=e.target
    setUser({
      ...user,
      [name]:value
    })
  
  }


  return (
    <div className='loginp'>
      {console.log(user)}
        <div className="bg"></div>

<form>
  <div className="form-field">
    <input type="email" name="email" value={user.email} placeholder="Email" required onChange={handleChange}/>
  </div>
  
  <div className="form-field">
    <input type="password" name="password" value={user.password}placeholder="Password" required onChange={handleChange}/> </div>
  
  <div class="form-field">
    <button className="btn" type="submit">Log in</button>
    <Link className="nav-link active" to="/home"><button className="btn" type="submit">Back</button></Link>
    
  </div>
</form>

    </div>
  )
}

export default Login