import React, {useRef, useEffect} from 'react'
import { Header, Mixology, Text } from "../../homeComp/experience/styles"
import GallerySlider from '../../slider/GallerySlider'
import { ContentBox, MainContainer, SliderBox } from './styles'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GalleryInfo = () => {
  gsap.registerPlugin(ScrollTrigger)
  const refContent = useRef<HTMLDivElement>(null)
  const refSlider = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(refContent.current, {opacity:0, autoAlpha:0}, {opacity:1, autoAlpha: 1, duration: 2, scrollTrigger: {
      trigger: refContent.current,
      start: "center bottom",
  
    }})
    gsap.fromTo(refSlider.current, {opacity:0, autoAlpha:0}, {opacity:1, autoAlpha: 1, duration: 2, scrollTrigger: {
      trigger: refSlider.current,
      start: "top bottom",
    }})
  }, [])
  
  return (
    <MainContainer>
        <ContentBox ref={refContent}>
            <Mixology>GALLERY</Mixology>
            <Header variant="h3">It's time for Cocktails</Header>
            <Text sx={{marginBottom: ".5rem"}}>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus dolor sit amet, consectetur adipiscing elit. Quisque hendrerit ipsum ac rhoncus vehicula. Curabitur ac nibh lorem. </Text>
            <Text>Pellentesque blandit non nisi rutrum sollicitudin.Curabitur interdum nunc sit amet ornare aliquet. Nunc in feugiat nisi. Nam elit felis, consectetur sit amet ex quis, accumsan placerat felis nec vel. </Text>

        </ContentBox>
        <SliderBox ref={refSlider}>
            <GallerySlider />
        </SliderBox>    
    </MainContainer>
  )
}

export default GalleryInfo