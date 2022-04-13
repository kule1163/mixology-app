import React, {useEffect, useRef} from 'react'
import DrinkSlider from '../../slider/DrinkSlider'
import {ContentBox,ContentContainer,MainContainer,SliderBox, ButtonPrimary} from "./styles"
import { Mixology, Text, Header } from '../experience/styles'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from 'react-router-dom'

const Cocktails = () => {
  const ref = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  const navigate = useNavigate()

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.fromTo(ref.current, {opacity:0, autoAlpha: 0}, {opacity: 1, autoAlpha:1, duration: 2, scrollTrigger: {
            trigger: ref.current,
            start: "30% bottom",
        }})
        gsap.fromTo(sliderRef.current, {opacity:0, autoAlpha: 0}, {opacity: 1, autoAlpha:1, duration: 2, scrollTrigger: {
          trigger: sliderRef.current,
          start: "30% bottom",
      }})

    })

    const handleClick = () => {
      window.scrollTo(0,0)

      navigate("/menu")
    }
  
  return (
    <MainContainer>
        <ContentContainer>
            <ContentBox ref={ref}>
                <Mixology style={{textAlign: "start"}}>FRESH & TASTY</Mixology>
                <Header style={{textAlign: "start"}} variant='h2'>Our Signature Cocktails</Header>
                <Text style={{textAlign: "start"}} variant='body2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.</Text>
                
                  <ButtonPrimary onClick={handleClick}>EXPLORE OUR MENU</ButtonPrimary>
                
            </ContentBox>
        </ContentContainer>
        <SliderBox ref={sliderRef}>
            <DrinkSlider />
        </SliderBox>
    </MainContainer>
  )
}

export default Cocktails