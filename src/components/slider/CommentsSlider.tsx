import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../../styles.css"

// import required modules
import { Navigation } from "swiper";
import { comments } from "../../utils/comments";
import styled from "styled-components";
import Gin from "../../assets/glassofgin.jpg"
import { Typography } from "@mui/material";

const MainContainer = styled.div`
    background-image: url(${Gin});
    visibility: hidden;
    padding-inline: 10rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-position-y: 0;
    background-size: cover;
    height: 60vh;
    @media (max-width: 700px) {
        padding-inline: 2rem;
    };
    & p {
        color: white !important;
        z-index: 10;
    };
    &:after {
        content: "''";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, .8);
    }
`

const DrinkSlider = () => {
    const ref = useRef<HTMLDivElement>(null)
    gsap.registerPlugin(ScrollTrigger);

    const revalRefs = useRef<HTMLDivElement[]>([])
    revalRefs.current = []

    const addToRef = (el:HTMLDivElement) => {
        if(el && !revalRefs.current.includes(el)) {
            revalRefs.current.push(el)
        }
    }

    useEffect(() => {
        /* gsap.fromTo(ref.current, {backgroundPosition: "30% 30%"}, {backgroundPosition: "60% 60%", scrollTrigger: {
            trigger: ref.current,
            markers: true,
            start: "top bottom",
            scrub: true
        }}) */
        revalRefs.current.forEach((el:HTMLDivElement, index:number) => {
            gsap.fromTo(el, {backgroundPositionY: "0", autoAlpha: 0}, {backgroundPositionY: "60%", autoAlpha: 1, scrollTrigger: {
                id:`section-${index+1}`,
                trigger: el,
                start: "top bottom",
                toggleActions: "restart complete complete reverse",
                scrub: true
            }}) 
        })

    })
 
    return (
    
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {/* <MainContainer ref={ref}> */}
        {comments.map(item => (
            <SwiperSlide key={item.id}>
                <MainContainer ref={addToRef}>
                  
                  <Typography style={{fontSize: "1.4em", marginBottom: "2rem"}}>{item.text}</Typography>
                    <Typography style={{fontSize: "1em"}}>{item.name}</Typography>
                    <Typography style={{fontSize: ".9em"}}>{item.role}</Typography>
                
                </MainContainer>
            </SwiperSlide>
        ))}
        {/* </MainContainer> */}
    </Swiper>
  
  )
}

export default DrinkSlider