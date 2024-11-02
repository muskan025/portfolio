import React from 'react'
import Wave from '../../img/wave.png'
import { themeContext } from "../../Context";
import { useContext } from "react";
import { FaDev, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
 
  return (
    <div className='footer'> 
<img src={Wave} alt="" style={{width:'100%'}} />
<div className="f-content">
     <div className="f-icons">
     <a href="https://github.com/muskan025" target="blank">
            <FaGithub className="f-icon"/>
          </a>
          <a
            href="https://www.linkedin.com/in/muskan-dodmani/"
            target="blank"
            rel="noreferrer"
          >
            <FaLinkedin className="f-icon"/>
          </a>
          <a href="https://medium.com/@muskandodmani222" target="blank">
             <FaMedium className="f-icon"/>
          </a>
          <a href="https://dev.to/muskan025/" target="blank">
             <FaDev className="f-icon"/>
          </a>
    </div>
</div>
    </div>
  )
}

export default Footer