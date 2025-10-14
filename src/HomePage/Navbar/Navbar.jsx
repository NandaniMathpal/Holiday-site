import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {

  // let icon = document.querySelector(".icon");  
  // let ul = document.querySelector("ul");

  // icon.addEventListener("click", ()=>{
  //   // ul.classList.toggle("li");
  //   console.log("clicked ul");
  // })
  
  return (
    <>
      <div className="nav">
        <div className="logo">
          {<img src="https://jingleholidaybazar.com/images/mainlogo.gif" alt="" />}
        </div>
        <div className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            
            <li><Link>Domestic</Link>
              <ul className="dropdown">
                <li><Link to="/north">North</Link></li>
                <li><Link to="/west">West</Link></li>
                <li><Link to="/east">East</Link></li>
                <li><Link to="/south">South</Link></li>
              </ul>
            </li>
            

            <li><Link>International<i className="ri-arrow-drop-down-line"></i>
</Link>
              <ul className="dropdown">
                <li><Link to="/thailand">Thailand</Link></li>
                <li><Link to="/belgium">Belgium</Link></li>
                <li><Link to="/canada">Canada</Link></li>
                <li><Link to="/dubai">Dubai</Link></li>
                <li><Link to="/singapore">Singapore</Link></li>
                <li><Link to="/germany">Germany</Link></li>
                <li><Link to="/maldives">Maldives</Link></li>
                <li><Link to="/iceland">Iceland</Link></li>
                <li><Link to="/malaysia">Malaysia</Link></li>
                <li><Link to="/switzerland">Switzerland</Link></li>
                <li><Link to="/nepal">Nepal</Link></li>

              </ul>
            </li>

            <li><Link>Place</Link>
              <ul className="dropdown">
                <li><Link to="/destination">Destination</Link></li>
                <li><Link to="/hotels">Hotels</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
              </ul>
            </li>

            <li><Link>Package</Link>
              <ul className='dropdown'>
                <li><Link to="/domestic">Domestic Package</Link></li>
                <li><Link to="/interpackage">International Package</Link></li>
              </ul>
            </li>

            <li><Link to="contact">Contact Us</Link></li>
            <li><Link to="phonenumber">+91 8506922777</Link></li>
            <li><Link to="/pay">Pay Now</Link></li>

          </ul> 

          <div className="icon">
            <i className="ri-menu-line"></i>
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar

