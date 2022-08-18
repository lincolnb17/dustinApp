import React,{useState} from 'react'
import axios from 'axios';
import "./Signup.css"
import { Link,useNavigate } from "react-router-dom";

const Signup = () => {
  const navigates = useNavigate()
  const [user,setUser]=useState({
    name:"",
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
   const signup =()=>{
    const {name,email,password,reEnterPassword}=user
    if (name && email && password &&(password==reEnterPassword)){
      axios.post('http://localhost:9002/signup',user)
      .then(res=> {
        alert(res.data.message)
        if((res.data.message)=="Successfully Registered, Please login now."){
          navigates('/profile')
        }
      })

    }else{
      alert("Invalid Input")
    }
   }



  return (

    
    <div className='signupp'>
        <div className="bg"></div>

<form>
<div className="form-fields">
    <input type="text"  name="name" value={user.name} placeholder="Full Name" required onChange={handleChange}/>
  </div>
  <div className="form-fields">
    <input type="email" name="email" value={user.email} placeholder="Email" required onChange={handleChange}/>
  </div>
  
  <div className="form-fields">
    <input type="password" name="password" value={user.password} placeholder="Enter password" required onChange={handleChange}/>
  </div>
  <div className="form-fields" id="conpass" >
    <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Confirm password" required onChange={handleChange}/>
  </div>
  
  <div className="form-fields">
    <button className="btn btn-success" type="button" onClick={signup}>Signup</button>
    <Link className="nav-link active" to="/home"><button className="btn" type="submit">Back</button></Link>
    
  </div>
</form>
    </div>
  )
}
export default Signup
