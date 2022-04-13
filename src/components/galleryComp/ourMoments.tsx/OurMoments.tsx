import React, {useRef, useEffect} from 'react'
import {MainContainer,Mixology,Header,Text, ContentBox} from "../../homeComp/experience/styles"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";


const OurMoments = () => {
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    gsap.fromTo(ref.current, {opacity:0, autoAlpha:0}, {opacity:1, autoAlpha: 1, duration: 2, scrollTrigger: {
      trigger: ref.current,
      start: "center bottom",
    }})
  })

  return (
    <MainContainer ref={ref}>
        <ContentBox>
        <Mixology>VISIT US</Mixology>
        <Header variant="h2">Our Moments</Header>
        <Text variant="body2">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus dolor sit amet, consectetur adipiscing elit. Quisque hendrerit ipsum ac rhoncus vehicula. Curabitur ac nibh lorem. Pellentesque blandit non nisi rutrum sollicitudin curabitur interdum nunc. 
        </Text>
        </ContentBox>
    </MainContainer>
  )
}

export default OurMoments