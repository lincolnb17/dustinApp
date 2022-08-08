import React from 'react'
import "./Services.css"
import { Link } from "react-router-dom";
import reuse from "./images/reuse.png"
import repair from "./images/repair.png"

const Services = () => {
  return (
         <div className="services">
          <div className="sermar">
        <div className="container">
            <div className="title">Our-Services</div>
            <div className="serv-content">
                <div className="card">
                    <div className="box">
                        <img src={reuse} alt="" />
                        <div className="text1">Re-use</div>
                        <p>Pack lunches in a reusable bag with reusable food and drink containers. Reuse containers and other materials for storage and crafts. Reuse single-sided printed pages for scratch paper. Find new homes for clothing and linens, or use them for rags, patchwork, and other projects.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                    <img src={repair} alt="" />
                        <div className="text1">Repair</div>
                        <p>Pack lunches in a reusable bag with reusable food and drink containers. Reuse containers and other materials for storage and crafts. Reuse single-sided printed pages for scratch paper. Find new homes for clothing and linens, or use them for rags, patchwork, and other projects.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                    
                    <img src={reuse} alt="" />
                        <div className="text1">Recycle</div>
                        <p>The first type of recycling can be classified by type of material that is being recycled. Glass recycling, paper recycling, metal recycling, plastic and textile recycling and finally electronic recycling. Another type of recycling is composting which is the “reuse of biodegradable waste,” like garden mulch, or food.</p>
                    </div>
                </div>
                
            </div>
            <Link className="nav-link active" to="/login"><button type="button" className="btn btn-secondary btn-light">Request A Pickup</button></Link>
            
            
        </div>
        </div>
    </div>
  )
}

export default Services