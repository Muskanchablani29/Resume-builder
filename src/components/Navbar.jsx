import React from 'react'
import image from '../images/Resumelogo.png'
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav-con">
      <div className="navbar1">
        <ul type='none'>
          <li><img src={image} alt="" /></li>
          <li><h1>Resume.com</h1></li>
        </ul>
      </div>
      <div className="nav2"> 
        <ul type='none'>
          <NavLink to="/" ><li>Home</li></NavLink>
          <NavLink to="/Template" ><li>Template</li></NavLink>
          <NavLink to="/About" ><li>About</li></NavLink>
          <NavLink to="/Contact" ><li>Contact</li></NavLink>
        </ul>
      </div> 
      <div className="nav3">
        <ul type='none'>
          <NavLink to="/Login" ><li>Log In</li></NavLink>
          <NavLink to="/Signup" ><li>Sign Up</li></NavLink>
        </ul>
      </div>
      </div>
    </div>
  )
}
