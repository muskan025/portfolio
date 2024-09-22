import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
 import Crown from "../../img/crown.png";
import glassesimogi from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion'
import { Link } from "react-scroll";
export const Intro = () => {

  const transition= {duration:2,type:'spring'}
  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode
  return (
    <div className="intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Muskan Dodmani</span>
          <span className="about">
          My aim is to contribute my technical skills to a dynamic team that values innovation and fosters a collaborative environment. I am excited about leveraging emerging technologies to create software solutions that not only meet but exceed user expectations.<br/><br/>

          Outside of tech, I find joy in composing poems and creating inspiring quotes.
          </span>
        </div>
      
        <Link spy={true} to='contact' activeClass="activeClass" smooth={true}>   <button className="button i-button">Hire me</button></Link>
        <div className="i-icons">
          <a href="https://github.com/muskan025" target="blank">
            <img src={Github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/muskan-dodmani/"
            target="blank"
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/poetry_frames_786/" target="blank">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
         <motion.img initial={{left:'-36%'}} whileInView={{left:'0'}} transition={transition} src={glassesimogi} alt="" />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "36%" }}
          transition={transition}
          className="floating-div">
          <FloatingDiv image={Crown} txt1="React" txt2="Developer" />
        </motion.div>
        <motion.div  initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div">
         </motion.div>
         <div className="blur" style={{ background: "rgb(238 210 255" }}></div>
        <div
        className="blur"
        style={{
          background: "#C1F5FF",
          top: "17rem",
          width: "21rem",
          height: "11rem",
          left: "-9rem",
        }}
      ></div>
      </div>
     
    </div>
  );
};
