import React, {useRef, useEffect} from 'react'
import {MainContainer,Mixology,Header,Text, ContentBox, ExperienceBox} from "./styles"
import Bar from  "../../../assets/bar.jpg"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";



const Experience = () => {
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.fromTo(imageRef.current, {opacity:0, autoAlpha: 0}, {opacity: 1, autoAlpha:1, duration: 2, scrollTrigger: {
            trigger: imageRef.current,
            start: "20% bottom",
        }})
        gsap.fromTo(contentRef.current, {opacity:0, autoAlpha: 0}, {opacity: 1, autoAlpha:1, duration: 2, scrollTrigger: {
          trigger: contentRef.current,
          start: "10% bottom",
      }})

    }, [])
 
  return (
    <MainContainer>
        <ExperienceBox ref={contentRef}>
          <Mixology>MIXOLOGY</Mixology>
          <Header variant="h2">ENJOY THE EXPERIENCE</Header>
          <Text variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit ipsum ac rhoncus vehicula. Curabitur ac nibh lorem. Pellentesque blandit non nisi rutrum sollicitudin.  interdum nunc sit amet ornare aliquet. Nunc in feugiat nisi. Nam elit felis, consectetur sit lorem ipuset.
          </Text>
        </ExperienceBox>
        <div ref={imageRef} style={{visibility: "hidden", width: "100%"}}>
          <img src={Bar}/>
        </div>
    </MainContainer>
  )
}

export default Experience