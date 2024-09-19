import React from 'react'
import Wave from '../../img/wave.png'

import Instagram from '@iconscout/react-unicons/icons/uil-instagram'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'
import { themeContext } from "../../Context";
import { useContext } from "react";
import './Footer.css'

const Footer = () => {
 
  return (
    <div className='footer'> 
<img src={Wave} alt="" style={{width:'100%'}} />
<div className="f-content">
    <span>muskandodmani222@gmail.com</span>
    <div className="f-icons">
        <a href="https://github.com/muskan025" target="blank">
        <Github color='white' size='3rem'/>
          </a>
          <a
            href="https://www.linkedin.com/in/muskan-dodmani/"
            target="blank"
            rel="noreferrer"
          >
            <LinkedIn color='white' size='3rem'/>
          </a>
          <a href="https://www.instagram.com/poetry_frames_786/" target="blank">
          <Instagram  color='white' size='3rem'/>
          </a>
    </div>
</div>
    </div>
  )
}

export default Footer