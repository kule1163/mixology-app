import React, {useRef, useEffect} from 'react'
import PageHeader from '../../components/pageHeader/PageHeader'
import { ImageContainer, MainContainer, SliderContainer } from './styles'
import EventPhoto from "../../assets/event.jpg"
import Unforgotable from '../../components/eventComp/unforgatable/Unforgotable'
import EventTwo from "../../assets/event2.jpg" 
import EventSlider from '../../components/slider/EventSlider'
import MakeReservation from '../../components/makeResevation/MakeReservation'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Event = () => {
  gsap.registerPlugin(ScrollTrigger)

  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(imageRef.current, {opacity:0, autoAlpha:0}, {opacity:1, autoAlpha: 1, duration: 2, scrollTrigger: {
        trigger: imageRef.current,
        start: "30% bottom",
      }})
})

  
  return (
    <MainContainer>
        <PageHeader header='EVENTS' image={EventPhoto}/>
        <Unforgotable />
        <ImageContainer ref={imageRef}>
            <img src={EventTwo} />
        </ImageContainer>
        <SliderContainer>
            <EventSlider />
        </SliderContainer>
        <MakeReservation />
    </MainContainer>
  )
}

export default Event