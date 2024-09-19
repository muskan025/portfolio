import React, { useContext } from "react";
import "./Services.css";
import Glasses from "../../img/glasses.png";
import Card from "../Card/Card";
import Resume from "./resume.pdf";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <div className="services" id="services">
   
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <ul className="list">
          <li>
            <h3>Custom Web Development</h3>
            <span>Creating responsive, user-friendly websites with cutting-edge technology like React.js. I deliver scalable solutions that meet your unique needs.</span>
          </li>

          <li>
            <h3>UI/UX Design</h3>
            <span>Designing intuitive, visually appealing interfaces that enhance user experience. I focus on clean, functional designs that engage users and drive conversions.</span>
          </li>

          <li>
            <h3>Performance Optimization</h3>
            <span>Ensuring your website runs at top speed, from code efficiency to load time reduction. I optimize websites for maximum performance,improving user satisfaction.</span>
          </li>


        </ul>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
   
      <div className="cards">

        <motion.div

          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading="Frontend Developer"
            detail="HTML,CSS,SCSS,Javascript,Typescript,React.js,Node.js,Express.js,MongoDB,GitHub,Netlify,Vercel,Figma"
          />
        </motion.div>
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
        </motion.div>
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
