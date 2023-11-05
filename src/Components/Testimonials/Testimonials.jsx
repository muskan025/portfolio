import React from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
 
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
 
const Testimonials = () => {
    const clients=[
{
    img:profilePic1,
    reviews:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In aut laboriosam illo velit porro vel deleniti explicabo voluptates repellendus eos!"
},
{
    img:profilePic2,
    reviews:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In aut laboriosam illo velit porro vel deleniti explicabo voluptates repellendus eos!"
},
{
    img:profilePic3,
    reviews:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In aut laboriosam illo velit porro vel deleniti explicabo voluptates repellendus eos!"
},
{
    img:profilePic4,
    reviews:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In aut laboriosam illo velit porro vel deleniti explicabo voluptates repellendus eos!"
},
    ]
  return (
    <div className='t-wrapper' id="testimonial"> 
<div className="t-heading">
    <span>Clients always get </span>
    <span>Exceptional Work </span>
    <span>from me...</span>

<div className="blur t-blur1" style={{background:"var(--purple"}}></div>
<div className="blur t-blur2" style={{background:"skyblue"}}></div>
</div>
 <Swiper  modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}>
    {clients.map((client,index)=>{
        return(
            <SwiperSlide key={index}>
                <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.reviews}</span>
                </div>
            </SwiperSlide>
        )
    })}
 </Swiper>
    </div>
  )
}

export default Testimonials