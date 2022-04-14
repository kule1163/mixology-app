import React from "react";
import { quaityList } from "../../utils/qualityList";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../../styles.css"

// import required modules
import { Navigation, Pagination} from "swiper";

const QualitySlider = () => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      
        {quaityList.map(item => (
            <SwiperSlide key={item.id}>
                <img src={item.image}/>
            </SwiperSlide>
        ))}

    </Swiper>
  </>
  )
}

export default QualitySlider