import React ,{useContext}from 'react'
import './Projects.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import Sidebar from '../../img/sidebar.png'
import quotivation from '../../img/quotivation.png'
import podcastapp from '../../img/podcastapp.png'
import liveup from '../../img/liveup.png'
import podcast from '../../img/podcast.png'
import worldExplorer from '../../img/worldExplorer.png'
import taskify from '../../img/taskify.png'
import { themeContext } from "../../Context";
import 'swiper/css'
const Projects = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='projects'  id="portfolio"> 
        <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
        <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className='projects-slider'>
<SwiperSlide>
<a href="https://liveup.vercel.app" target='_blank'><img src={liveup} alt="" /></a>
</SwiperSlide>
<SwiperSlide>
<a href="https://prodpulseplatform.netlify.app" target='_blank'><img src={podcast} alt="" /></a>
</SwiperSlide>
<SwiperSlide>
<a href="https://quotivate-app.vercel.app" target='_blank'><img src={quotivation} alt="" /></a>
</SwiperSlide>
<SwiperSlide>
<a href="https://worldexplorerr.netlify.app" target='_blank'><img src={worldExplorer} alt="" /></a>
</SwiperSlide>
 
        </Swiper>
    </div>
  )
}

export default Projects
