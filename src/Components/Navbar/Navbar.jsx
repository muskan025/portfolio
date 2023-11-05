import React from "react";
import './Navbar.css';
import Toggle from "../Toggle/Toggle";
import {Link} from 'react-scroll'
import Services from "../Services/Services";
import Experience from "../Experience/Experience";
function Navbar() {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
    <div className="n-name">Muskan</div>
        <Toggle/>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{listStyleType
          :'none'}}>
            <Link spy={true} to='Navbar' activeClass="activeClass" smooth={true}> <li>Home</li></Link>
           
            <Link spy={true} to='services' activeClass="activeClass" smooth={true}><li>Services</li></Link>
            
            <Link spy={true} to='experience' activeClass="activeClass" smooth={true}><li>Experience</li></Link>
            
            <Link spy={true} to='projects' activeClass="activeClass" smooth={true}> <li>Projects</li></Link>
           
            <Link spy={true} to='testimonial' activeClass="activeClass" smooth={true}><li>Testimonial</li></Link>
            
          </ul>
        </div>
      <Link spy={true} to='contact' activeClass="activeClass" smooth={true}>  <button className="button n-button">Contact</button></Link>
      </div>
    </div>
  );
}

export default Navbar;
