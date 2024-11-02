import React, { useState } from "react";
import './Navbar.css';
import Toggle from "../Toggle/Toggle";
import {Link} from 'react-scroll'
import Services from "../Services/Services";
import Experience from "../Experience/Experience";
import { FaHamburger } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
function Navbar() {

  const [isHamburgerMenu,setIsHamburgerMenu] = useState(false)

  return (
    <div className="n-wrapper"  id="Navbar">
      <div className="n-left">
    <div className="n-name">Muskan</div>
        <Toggle/>
      </div>
      <div className={`n-right ${isHamburgerMenu ? 'n-right-open':''}`} >
      
      {
              isHamburgerMenu ? <GrClose className="close" onClick={()=> setIsHamburgerMenu(!isHamburgerMenu)} /> :
              <FaHamburger className="hamburger" onClick={()=> setIsHamburgerMenu(!isHamburgerMenu)}/> 
              
            }
        <div className={`n-list ${isHamburgerMenu ? 'open':''}`}>
        
          <ul style={{listStyleType
          :'none'}}>
            
            <Link spy={true} to='intro' activeClass="activeClass" smooth={true}> <li>Intro</li></Link>
           
            <Link spy={true} to='services' activeClass="activeClass" smooth={true}><li>Services</li></Link>
            
            <Link spy={true} to='skills' activeClass="activeClass" smooth={true}><li>Skills</li></Link>
            
            <Link spy={true} to='projects' activeClass="activeClass" smooth={true}> <li>Projects</li></Link>
           
            <Link spy={true} to='blogs' activeClass="activeClass" smooth={true}><li>Blogs</li></Link>

            <Link spy={true} to='interests' activeClass="activeClass" smooth={true}><li>Interests</li></Link>
            <Link spy={true} to='contact' activeClass="activeClass" smooth={true}>  <button className="button n-button">Contact</button></Link>
          </ul>
        </div>
      

      </div>
    </div>
  );
}

export default Navbar;
