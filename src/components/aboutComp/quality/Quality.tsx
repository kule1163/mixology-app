import React, {useRef, useEffect} from 'react'
import { Header, Text } from "../../homeComp/experience/styles"
import QualitySlider from '../../slider/QualitySlider'
import {MainContainer,ContentBox,SliderBox} from "./styles"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Quality = () => {
  gsap.registerPlugin(ScrollTrigger)

  const contentRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(contentRef.current, {opacity:0, autoAlpha:0}, {opacity:1, autoAlpha: 1, duration: 2, scrollTrigger: {
      trigger: contentRef.current,
      start: "20% bottom",
    }})
    gsap.fromTo(sliderRef.current, {opacity:0, autoAlpha:0}, {opacity:1, autoAlpha: 1, duration: 2, scrollTrigger: {
      trigger: sliderRef.current,
      start: "20% bottom",

    }})
  }, [])
 
  
  return (
    <MainContainer>
        <ContentBox ref={contentRef}>
          <Header  variant='h3'>Quality Products</Header>
          <Text style={{marginBottom: "1rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec Vestibulum a t ullamcorp.</Text>
          <Text>Integer eu mauris sem. In in ante erat. Vestibulum a tempus augue. Morbi orci dui, tincidunt quis aliquet eu, scelerisque eu neque. Ut imperdiet, ante sit amets.</Text>
        </ContentBox>
        <SliderBox ref={sliderRef}>
            <QualitySlider />
        </SliderBox>
    </MainContainer>
  )
}

export default Quality