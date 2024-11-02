import React from "react";
import "./Intro.css";
import glassesimogi from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion';
import Resume from './resume.pdf';
import Crown from '../../img/crown.png'
import DotGrid from '../../img/dotgrid.png'
import GlassMorphismCard from "../Card/GlassMorphismCard";
import { FaDev, FaDownload, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { FcDownload } from "react-icons/fc";
import { FiDownload } from "react-icons/fi";

 export const Intro = () => { 

  const transition= {duration:2,type:'spring'}
  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode
  return (
    <div className="intro" id="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Muskan Dodmani</span>
        </div>
        <GlassMorphismCard>
          <p>
          My aim is to contribute my technical skills to a dynamic team that values innovation and fosters a collaborative environment. I am excited about leveraging emerging technologies to create software solutions that not only meet but exceed user expectations.<br/><br/>

          Outside of tech, I find joy in composing poems and creating inspiring quotes.
          </p>
          </GlassMorphismCard>
       
      </div>
      <div className="i-right">
       
       <motion.img initial={{left:'-36%'}} whileInView={{left:'-15%'}} transition={transition} src={glassesimogi} alt="" />
        <motion.div
          initial={{ top: "0%", left: "74%" }}
          whileInView={{ left: "36%" }}
          transition={transition}
          className="floating-div">
          <FloatingDiv image={Crown} txt1="ReactJS" txt2="Developer" />
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
        <div className="dot"><img src={DotGrid} alt="" /></div>
      <div className="btn-links">
        <a href={Resume} download>
          
          <button className="button i-button "> <FiDownload className="icon"/> Download CV</button>
        </a>
        <div className="i-icons">
          <a href="https://github.com/muskan025" target="blank">
            <FaGithub className="icon"/>
          </a>
          <a
            href="https://www.linkedin.com/in/muskan-dodmani/"
            target="blank"
            rel="noreferrer"
          >
            <FaLinkedin className="icon"/>
          </a>
          <a href="https://medium.com/@muskandodmani222" target="blank">
             <FaMedium className="icon"/>
          </a>
          <a href="https://dev.to/muskan025/" target="blank">
             <FaDev className="icon"/>
          </a>
        </div>
        </div>
      </div>
    
    </div>
  );
};
