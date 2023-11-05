import React, { useContext } from "react";
import "./Experience.css";
import { themeContext } from "../../Context";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id="experience">
      <div className="achievment">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--teal)" : "" }}
        >
          8+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>Years</span>
        <span>experience</span>
      </div>
      <div className="achievment">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--teal)" : "" }}
        >
          20+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>Projects</span>
        <span>completed</span>
      </div>
      <div className="achievment">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--teal)" : "" }}
        >
          5+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>Companies</span>
        <span>worked</span>
      </div>
    </div>
  );
};

export default Experience;
