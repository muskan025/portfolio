import React from 'react'
import './Card.css'
const GlassMorphismCard = ({children}) => {
    return (
        <div className='glassCard'>
            <div className='gcard'>
            {children}
            </div>
            <div className="gcircle"></div>
        </div>
    )
}

export default GlassMorphismCard
