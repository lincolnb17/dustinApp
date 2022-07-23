import React from 'react'
import img from "./images/1.jpg"
import './About.css'
const About = () => {
  return (
    <div class="about">
        <div className="container">
            <a className="title">About-Us</a>
            <div className="about-content">
                <div className="column-left">
                    <img src={img} height="500px" width="600px" alt=""></img>
                </div>
                <div className="column-right">
                    <div className="text">About Dust-In<br></br><span>Always Working for a Clean Tomorrow</span></div>
                    <p>Waste management is the managing of waste by disposal and recycling of it. Moreover, waste management needs proper techniques keeping in mind the environmental situations. For instance, there are various methods and techniques by which the waste is disposed of. Some of them are Landfills, Recycling, Composting, etc.</p>
                    <button type="button" className="btn btn-outline-success">Learn More...</button>


                </div>
            </div>
            </div>
    </div>
    
    

  )
}

export default About;