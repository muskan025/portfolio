
import React, {useContext,useRef,useState} from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
 import { themeContext } from "../../Context";
const Contact = () => {

  const [done,setDone]=useState(false);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
 
    emailjs
      .sendForm('service_vrsjjfl', 'template_fukemie', form.current, {
        publicKey: 'a5x7f7Ur717h3gT8L',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  function thanking(){
    setDone(true)
    setTimeout(()=>{ setDone(false)},3000)
  }

  return (
    <div className='contact-form' id="contact"> 
    <div className="w-left">
        <div className="awesome">
        <span style={{color:darkMode?"white":''}} >Get in touch</span>
        <span>Contact me</span>
        <div className="blur s-blur1" style={{background:"#ABF1FF94"}}>
        </div>
        </div>
    </div>
    <div className="c-right">
        <form ref={form} onSubmit={sendEmail} >
            
                <input type="text" name="user_name" className="user" placeholder="Name" />
            
                <input type="email" name="user_email" className="user" placeholder="Email" />
          
                <textarea name="message" className="user" placeholder="Message" ></textarea>
                <input type="submit" value="Send" className='button' onClick={thanking}/>
                {done && <span style={{ color: darkMode ? "" : "" }}><h2>Thanks for contacting me &#128516;</h2></span>}
             <div className="blur c-blur1" style={{background:"var(--purple)"}}></div>
        </form>
    </div>
    </div>
  )
}

export default Contact





 