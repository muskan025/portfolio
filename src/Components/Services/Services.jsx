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
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Sunt, est! Ipsum cum autem aut ipsam?
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
       
        <motion.div
         
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading="Developer"
            detail="HTML,CSS,Javascript,Typescript,React"
          />
        </motion.div>
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          {/* <Card
            emoji={HeartEmoji}
            heading="Design"
            detail="Figma,Sketch,Photoshop"
          /> */}
        </motion.div>
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          {/* <Card
            emoji={Humble}
            heading="UI/UX"
            detail="lorem ipsum text are usual"
          /> */}
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
