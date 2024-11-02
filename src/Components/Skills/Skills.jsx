import React from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaSass, 
  FaJs, 
  FaReact, 
  FaNodeJs 
} from 'react-icons/fa6';
import './Skills.css';
import { SiExpress, SiMongodb, SiRedux } from 'react-icons/si';

const Skills = () => {
  const badges = [
    { name: 'HTML', icon: <FaHtml5 size={24} />, class: 'badge-html' },
    { name: 'CSS', icon: <FaCss3Alt size={24} />, class: 'badge-css' },
    { name: 'SCSS', icon: <FaSass size={24} />, class: 'badge-scss' },
    { name: 'JavaScript', icon: <FaJs size={24} />, class: 'badge-javascript' },
    { name: 'React', icon: <FaReact size={24} />, class: 'badge-react' },
    { name: 'Redux', icon: <SiRedux size={24}/>, class: 'badge-redux' },
    { name: 'Node.js', icon: <FaNodeJs size={24} />, class: 'badge-nodejs' },
    { name: 'Express', icon:  <SiExpress size={24}/>, class: 'badge-express' },
    { name: 'MongoDB', icon:  <SiMongodb size={24}/>, class: 'badge-mongodb' }
  ];

  return (
    <div className='skills-badgeContainer' id='skills'>
      <h2 className='heading'>Tech Skills</h2>
    <div className="badge-container">
      
      {badges.map((badge, index) => (
        <div key={index} className={`badge ${badge.class}`}>
          {badge.icon}
          <span>{badge.name}</span>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Skills;