import React,{useState} from 'react'
import { Link,useNavigate } from "react-router-dom";
import axios from "axios"
import './Login.css'



const Login = () => {
  const navigate = useNavigate()
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
  const login =()=>{
    const {name,email,password}=user
    if ( email && password){
      axios.post('http://localhost:9002/login',user)
      .then(res=>{
        alert(res.data.message)
        if((res.data.message)=="Login Sucess"){
          navigate('/profile')
        }
        
      })

    }else{
      alert("Invalid data")
    }
    
   }


  return (
    <div className='loginp'>
        <div className="bg"></div>

<form>
  <div className="form-field">
    <input type="email" name="email" value={user.email} placeholder="Email" required onChange={handleChange}/>
  </div>
  
  <div className="form-field">
    <input type="password" name="password" value={user.password}placeholder="Password" required onChange={handleChange}/> </div>
  
  <div class="form-field">
    
    <Link className="nav-link active" to="/home"><button className="btn" type="submit">Back</button></Link>
  <button className="btn btn-success" type="button"onClick={login}>Log in</button>
    {/* <Link className="nav-link active" to="/profile"><button className="btn btn-success" type="button"onClick={login}>Log in</button></Link> */}
    
  </div>
</form>

    </div>
  )
}

export default Login