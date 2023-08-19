import React, { useRef, useState } from 'react';
import './Reward_slider.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import ref_picc1 from "../Assets/ref_immg1.png"
import ref_picc2 from "../Assets/ref_immg2.png"
import ref_picc3 from "../Assets/ref_immg3.png"
import blur from "../Assets/blur.png"
import blur_2 from "../Assets/blur_2.png"
import blur_3 from "../Assets/blur_3.png"
import blur_7 from "../Assets/seven.png"
import blur_8 from "../Assets/eight.png"
import blur_9 from "../Assets/nine.png"

function Reward_slider() {
  return (
    <div>
      <div className=''>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            375: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            425: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
            2024: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
        modules={[ Navigation, Autoplay, Pagination]}
        className="mySwiper blowpadd "
      >
        <SwiperSlide className='text-danger'>
            <div className="crtUpper">
                <img src={ref_picc1} alt="" className="slDPicSty" />
                </div> 
        </SwiperSlide>
        <SwiperSlide className='text-danger'>
            <div className="crtUpper">
                <img src={ref_picc2} alt="" className="slDPicSty" />
                </div> 
        </SwiperSlide>
        <SwiperSlide className='text-danger'>
            <div className="crtUpper">
                <img src={ref_picc3} alt="" className="slDPicSty" />
                </div> 
        </SwiperSlide>
        <SwiperSlide className='text-danger'>
            <div className="crtUpper">
                <img src={blur} alt="" className="slDPicSty" />
                </div> 
        </SwiperSlide>
        <SwiperSlide className='text-danger'>
            <div className="crtUpper">
                <img src={blur_2} alt="" className="slDPicSty" />
                </div> 
        </SwiperSlide>
        <SwiperSlide className='text-danger'>
            <div className="crtUpper">
                <img src={blur_3} alt="" className="slDPicSty" />
                </div> 
        </SwiperSlide>
        <SwiperSlide className='text-danger'>
            <div className="crtUpper">
                <img src={blur_7} alt="" className="slDPicSty" />
                </div> 
        </SwiperSlide>
        <SwiperSlide className='text-danger'>
            <div className="crtUpper">
                <img src={blur_8} alt="" className="slDPicSty" />
                </div> 
        </SwiperSlide>
        <SwiperSlide className='text-danger'>
            <div className="crtUpper">
                <img src={blur_9} alt="" className="slDPicSty" />
                </div> 
        </SwiperSlide>
        <SwiperSlide className='text-danger'>
            <div className="crtUpper">
                <img src={ref_picc1} alt="" className="slDPicSty" />
                </div> 
        </SwiperSlide>
        <SwiperSlide className='text-danger'>
            <div className="crtUpper">
                <img src={ref_picc2} alt="" className="slDPicSty" />
                </div> 
        </SwiperSlide>
        <SwiperSlide className='text-danger'>
            <div className="crtUpper">
                <img src={ref_picc3} alt="" className="slDPicSty" />
                </div> 
        </SwiperSlide>
        <SwiperSlide className='text-danger'>
            <div className="crtUpper">
                <img src={blur} alt="" className="slDPicSty" />
                </div> 
        </SwiperSlide>
        <SwiperSlide className='text-danger'>
            <div className="crtUpper">
                <img src={blur_2} alt="" className="slDPicSty" />
                </div> 
        </SwiperSlide>
        <SwiperSlide className='text-danger'>
            <div className="crtUpper">
                <img src={blur_3} alt="" className="slDPicSty" />
                </div> 
        </SwiperSlide>
        <SwiperSlide className='text-danger'>
            <div className="crtUpper">
                <img src={blur_7} alt="" className="slDPicSty" />
                </div> 
        </SwiperSlide>
        <SwiperSlide className='text-danger'>
            <div className="crtUpper">
                <img src={blur_8} alt="" className="slDPicSty" />
                </div> 
        </SwiperSlide>
        <SwiperSlide className='text-danger'>
            <div className="crtUpper">
                <img src={blur_9} alt="" className="slDPicSty" />
                </div> 
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  )
}

export default Reward_slider
