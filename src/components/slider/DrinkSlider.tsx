import React, { useRef, useState } from "react";
import { cocktails } from "../../utils/sliderDrinks";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../../styles.css"

// import required modules
import { Navigation } from "swiper";

const DrinkSlider = () => {
  return (
    <>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      
      {cocktails.map(item => (
        <SwiperSlide key={item.id}>
          <img src={item.image} />
        </SwiperSlide>
      ))}
    </Swiper>
  </>
  )
}

export default DrinkSlider