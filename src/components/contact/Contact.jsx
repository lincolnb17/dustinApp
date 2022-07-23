import React from 'react'
import "./Contact.css"
import user from "./images/user.svg"
import loc from "./images/loc.svg"
import email from "./images/email.svg"


const Contact = () => {
  return (
    <div>
            <div className="contact" >
        <div className="container">
            <div className="subtitle">
                <h2 className="title">Contact-Us</h2>
 
            </div>

            <div className="contact-content">
                <div className="column-left">
                    <div className="titles">Get in Touch</div>
                        <p className='des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsa perferendis libero quis
                            dolorum distinctio. Deleniti sint fugit ut at necessitatibus repellat saepe fuga explicabo.
                        </p>
                        <div className="icons">
                            <div className="row">
                            <img src={user} alt="" />
                                <div className="info">
                                    <div className="head">Comapny</div>
                                    <div className="sub-title">Trash-in Pvt.Ltd</div>
                                </div>
                            </div>
                            <div className="row">
                            <img src={loc} alt="" />
                                <div className="info">
                                    <div className="head">Address</div>
                                    <div className="sub-title">Kathmandu,Nepal</div>
                                </div>
                            </div>
                            <div className="row">
                            <img src={email} alt="" />
                                <div className="info">
                                    <div className="head">Email</div>
                                    <div className="sub-title">trashin@gmail.com</div>
                                </div>
                            </div>
                        </div>
                </div>

                <div className="column right">
                    <div className='titles'>Message Us</div>
                    <form action="">
                    <div className="fields"> 
                        <div className="field name">
                         <label for="First Name"></label>
                            <input type="text" placeholder="Name" required></input>
                        </div>
                        <div className="field email">
                       <label for="First Name"></label>
                            <input type="email" placeholder="Email" required></input>
                        </div>
                        </div>

                        <div className="field">
                          <label for="First Name"></label>
                            <input type="text" placeholder="Subject" required></input>
                        </div>
                    
                        <div className="field textarea">
                           <label for="First Name"></label> 
                            <textarea cols="30" rows="10" placeholder="Describe project.." required></textarea>

                        </div>
                        <button type="button" className="btn btncon btn-success">Submit</button>

                        </form>
                 </div> 
                       
                    
                    </div>
                </div>
            </div>
            </div>
       
  )}


export default Contact;