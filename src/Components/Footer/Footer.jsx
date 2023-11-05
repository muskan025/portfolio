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
        <Instagram  color='white' size='3rem'/>
        <LinkedIn color='white' size='3rem'/>
        <Github color='white' size='3rem'/>
    </div>
</div>
    </div>
  )
}

export default Footer