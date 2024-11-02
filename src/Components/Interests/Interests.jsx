import React from 'react'
import { FaQuoteLeft, FaCloud, FaPuzzlePiece } from 'react-icons/fa';
import devCard from '../../img/muskan025.png'
import quote1 from '../../img/quote1.png'
import quote2 from '../../img/quote2.png'
import quote3 from '../../img/quote3.png'
import quote4 from '../../img/quote4.png'
import sky1 from '../../img/sky1.jpeg'
import sky2 from '../../img/sky2.jpeg'
import sky3 from '../../img/sky3.jpeg'
import sky4 from '../../img/sky4.jpeg'
import sky5 from '../../img/sky5.jpeg'
import sky6 from '../../img/sky6.jpeg'
import DotGrid from '../../img/dotgrid.png'
import './Interests.css'

const quotes = [
  "The wheel of courage will run until you have the will to run the wheel.",
  "Dreaming or dreading, it's your choice.",
  "Blunders occur in a blink, wonders occur after you stink.",
  "Don't let happiness escape, it creates a void where sorrow resides."
];

const skyImages = [
  sky1,sky2,sky3,sky4,sky5,sky6
];

const Interests = () => {
  return (
    <div className="interests-container" id="interests">
      <h2 className="interests-title">Interests</h2>
      <div className="dot"><img src={DotGrid} alt="" /></div>
      <div className="interests-grid">
        <div className="interest-card">
        <div className="card-header">
            <FaPuzzlePiece className="icon icon-purple" />
            <h3 className="card-title-with-icon">Fav Extension</h3>
          </div>
         <a href="https://app.daily.dev/muskan025" target='_blank'>
         <img 
            src={devCard} 
            alt="Daily.dev Stats" 
            className="card-image"
          />
          </a>
        </div>
 
        <div className="interest-card">
          <div className="card-header">
            <FaQuoteLeft className="icon icon-indigo" />
            <h3 className="card-title-with-icon">My Quotes</h3>
          </div>
          <div className="quotes-container">
            {quotes.map((quote, index) => (
              <div key={index} className="quote-box">
                <p className="quote-text">{quote}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="interest-card">
          <div className="card-header">
            <FaCloud className="icon icon-sky" />
            <h3 className="card-title-with-icon">Sky Gazer</h3>
          </div>
          <div className="sky-gallery">
            {skyImages.map((img, index) => (
              <div className="image-container">
                 <img 
                key={index}
                src={img} 
                alt="Sky view" 
                className="gallery-image"
              />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interests;