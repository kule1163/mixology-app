import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../../styles.css"

// import required modules
import { Navigation, Pagination} from "swiper";
import { gallerySlider } from "../../utils/gallerySlider";

const GallerySlider = () => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      
        {gallerySlider.map(item => (
            <SwiperSlide key={item.id}>
                <img src={item.image}/>
            </SwiperSlide>
        ))}

    </Swiper>
  </>
  )
}

export default GallerySlider