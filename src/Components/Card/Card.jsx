import React from 'react'
import './Card.css'
const Card = ({emoji,heading,detail}) => {
  return (
    <div className='card'> 
    <img src={emoji} alt="" />
    <span>{heading}</span>
    <span className='detail'>HTML,CSS,SCSS,Javascript,Typescript,<br/><br/>React.js,Node.js,Express.js,MongoDB</span>
     </div>
  )
}

export default Card