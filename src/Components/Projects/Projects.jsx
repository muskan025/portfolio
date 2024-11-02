import React, { useContext } from 'react'
import './Projects.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Sidebar from '../../img/sidebar.png'
import quotivation from '../../img/quotivation.png'
import podcastapp from '../../img/podcastapp.png'
import liveup from '../../img/liveup.png'
import podcast from '../../img/podcast.png'
import worldExplorer from '../../img/worldExplorer.png'
import taskify from '../../img/taskify.png'
import { BsGithub } from 'react-icons/bs';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import { themeContext } from "../../Context";
import 'swiper/css'
import ProjectCard from '../Card/ProjectCard'
const Projects = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const projects = [
    {
      title: "LiveUp - Blog Web App",
      description: "A full-stack blog app focusing on user productivity with responsive UI, note-taking capabilities, scheduled reviews, CRUD operations and much more.",
      tech: ["React", "RTK", "RTK Query", "React Quill", "React Persistor", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/muskan025/liveup_blog_webapp",
      live: "https://liveup.vercel.app",
      image: liveup
    },
      {
        title: "ProdPulse - Podcast Web App",
        description: "A podcast platform with user authentication, search functionality, and custom audio player, podcast and episode creation and profile management.",
        tech: ["React", "Redux Toolkit", "Firebase","React Toastify"],
        github: "https://github.com/muskan025/Podcast-WebApp",
        live: "https://prodpulseplatform.netlify.app/",
        image: podcast
      },
      {
        title: "Quotivation - Quotes Web App",
        description: "A curated quotes platform where users can explore mood-based quotes and implement filtering functionality for different categories. Features original quotes and state management.",
        tech: ["React", "Redux Toolkit"],
        github: "https://github.com/muskan025/quotivate-app",
        live: "https://quotivate-app.vercel.app/",
        image: quotivation
      }
    
  ];
  return (
    <div className='projects' id="portfolio">
      <span style={{ color: darkMode ? 'white' : '' }} className='heading'>Recent Projects</span>
      <div className='projects-slider'>

          {projects.map((project, index) => (
           
              <ProjectCard key={index} project={project} index={index} />
            
          ))}

      </div>
    </div>
  )
}

export default Projects
