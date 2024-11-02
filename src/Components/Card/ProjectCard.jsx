import UilGithub from '@iconscout/react-unicons/icons/uil-github'
import React, { useState } from 'react'

import quotivation from '../../img/quotivation.png'
import podcastapp from '../../img/podcastapp.png'
import liveup from '../../img/liveup.png'
import podcast from '../../img/podcast.png'
import worldExplorer from '../../img/worldExplorer.png'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'

const ProjectCard = ({project,index}) => {

    const [isVisible, setIsVisible] = useState({});
 

  return (
    <div
    className="projectContainer">
    <img
      src={project.image}
      alt={project.title}
      className="p-image"
    />
    <div className="info">
      <h3 className="title">{project.title}</h3>
      <p className="desc">
        {project.description}
      </p>
      <div className="detail">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="skills"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="p-links">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <BsGithub size={20} />
          Code
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <FaExternalLinkSquareAlt size={20} />
          Live Demo
        </a>
      </div>
    </div>
  </div>
  )
}

export default ProjectCard
