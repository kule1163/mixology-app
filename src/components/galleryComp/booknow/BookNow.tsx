import React, {useRef, useEffect} from 'react'
import {BUttonContainer,ImageContainer,MainContainer,} from "./styles"
import BookNowPhoto from "../../../assets/booknow.jpg"
import { Header, Text } from  "../../homeComp/experience/styles" 
import { ButtonPrimary } from '../../homeComp/cocktails/styles'
import { ButtonSecondry } from '../../../pages/about/styles'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

const BookNow = () => {
  gsap.registerPlugin(ScrollTrigger)

  const imgRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const el= useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(imgRef.current, {opacity:0, autoAlpha:0}, {opacity:1, autoAlpha: 1, duration: 2, scrollTrigger: {
      trigger: imgRef.current,
      start: "center bottom",
    }})
    gsap.fromTo(buttonRef.current, {opacity:0, autoAlpha:0}, {opacity:1, autoAlpha: 1, duration: 2, scrollTrigger: {
      trigger: buttonRef.current,
      start: "center bottom",
    }})
  })

  return (
    <MainContainer ref={el}>
        <ImageContainer ref={imgRef}>
            <img src={BookNowPhoto} />
        </ImageContainer>
        <BUttonContainer ref={buttonRef}>
            <Header variant='h3'>Book Now</Header>
            <Text>Curabitur interdum nunc sit amet ornare aliquet. Nunc in feugiat nisi lorem. </Text>
            <ButtonSecondry style={{marginBottom: "0 !important"}}>CONTACT US</ButtonSecondry>
        </BUttonContainer>
    </MainContainer>
  )
}

export default BookNow