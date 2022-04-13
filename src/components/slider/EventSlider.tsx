import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "../../styles.css"

import { eventImages } from '../../utils/eventImages';


const EventSlider = () => {
  return (
    <>
    <Swiper 
        className="mySwiper"
        /* slidesPerView={3} */
        spaceBetween={30}
        breakpoints={{
            800: {
                slidesPerView: 2
            },
            1100: {
                slidesPerView: 3
            }
        }}
     >
      {eventImages.map(item => (
          <SwiperSlide key={item.id}>
              <img src={item.image}/>
          </SwiperSlide>
      ))}
    </Swiper>
  </>
  )
}

export default EventSlider