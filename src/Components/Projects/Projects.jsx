import React ,{useContext}from 'react'
import './Projects.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import Sidebar from '../../img/sidebar.png'
import quotivation from '../../img/quotivation.png'
import podcastapp from '../../img/podcastapp.png'
import socialMediaApp from '../../img/social-media-app.png'
import HOC from '../../img/hoc.png'
import taskify from '../../img/taskify.png'
import { themeContext } from "../../Context";
import 'swiper/css'
const Projects = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='projects'  id="portfolio"> 
        {/* heading */}
        <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
        <span>Portfolio</span>
         {/* slider */}
        <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className='projects-slider'>
<SwiperSlide>
<a href="https://podcast-app-beryl.vercel.app/"><img src={podcastapp} alt="" /></a>
</SwiperSlide>
<SwiperSlide>
<a href="https://socialmedia-reactapp.netlify.app"> <img src={socialMediaApp} alt="" /></a>

</SwiperSlide>
<SwiperSlide>
<a href="https://taskify-reactapp.netlify.app/"><img src={taskify} alt="" /></a>
   
</SwiperSlide>
<SwiperSlide>
<a href="ttps://quotivationapp.netlify.app"><img src={quotivation} alt="" /></a>
</SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Projects