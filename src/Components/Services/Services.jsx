import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import DotGrid from "../../img/dotgrid.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import GlassMorphismCard from "../Card/GlassMorphismCard";
import { FaEnvelopeCircleCheck } from "react-icons/fa6";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome heading">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
       <GlassMorphismCard>
       <p>
        Creating responsive, user-friendly websites with cutting-edge technology React.js
          <br />
          Ensuring your website runs at top speed, from code efficiency to load time reduction. 
          <br/><br/>I optimize websites for maximum performance and improve user satisfaction.
        </p>
       </GlassMorphismCard>
     
        <Link spy={true} to='contact' activeClass="activeClass" smooth={true}>  
         <button className="button s-button"> <FaEnvelopeCircleCheck className="icon"/> Hire me</button></Link>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}>
        </div>
        <div className="dot"><img src={DotGrid} alt="" /></div>

      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Delivering pixel-perfect websites that transform designs into seamless digital experiences. Every element is crafted with precision to ensure your brand stands out."}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Creating high-performance solutions with clean, maintainable code. Using modern development practices to build reliable systems that grow with your business."}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "25rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          className="card-3"
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Crafting visually appealing interfaces that enhance user experience and drive conversions. Every feature is designed with your users and business goals in mind."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;