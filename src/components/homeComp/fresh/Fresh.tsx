import React, { useRef, useEffect } from 'react'
import { MainCointer, ContentBox, ContentContainer, ImageBox, } from "../../homeComp/atension/styles"
import { Mixology, Header, Text } from "../../homeComp/experience/styles"
import Customer from "../../../assets/customer.jpg"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface FreshProps {
  xPosition: number;
  yPosition: number;
}

const Fresh = ({ xPosition, yPosition }: FreshProps) => {
  const imageRef = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLDivElement>(null)
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(ref.current, { opacity: 0, autoAlpha: 0 }, {
      opacity: 1, autoAlpha: 1, duration: 2, scrollTrigger: {
        trigger: ref.current,
        start: "30% bottom",
      }
    })
    gsap.fromTo(imageRef.current, { opacity: 0, autoAlpha: 0 }, {
      opacity: 1, autoAlpha: 1, duration: 2, scrollTrigger: {
        trigger: imageRef.current,
        start: "30% bottom",
      }
    })
    /* gsap.to(ref.current, {opacity: 1, duration: 2, scrollTrigger:{
        trigger: ref.current,
        markers: true,
        start: "center bottom",
    }}) */

  },[])

  /* useEffect(() => {
    gsap.to(imageRef.current, 1, { x: xPosition, y: yPosition, overwrite: "auto" })

  }, [xPosition]) */

  return (
    <MainCointer>
      <ImageBox ref={imageRef}>
        <img  src={Customer} />
      </ImageBox>
      <ContentContainer>
        <ContentBox ref={ref} style={{ marginLeft: "auto" }}>

          <Mixology>OUR COCKTAILS</Mixology>
          <Header variant='h3'>Fresh & Colorful</Header>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit ipsum ac rhoncus vehicula.</Text>
          <Text>Curabitur ac nibh lorem. Pellentesque blandit non nisi rutrum sollicitudin. Curabitur interdum nunc sit amet ornare aliquet. Nunc in feugiat nisi. Nam elit felis, consectetur sit Donec vel quam odio. Vestibulum sit amet volutpat turpis. Praesent viverra lacinia sapien id volutpat. </Text>

        </ContentBox>
      </ContentContainer>
    </MainCointer>
  )
}

export default Fresh