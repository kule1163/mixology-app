import React, {useRef, useEffect} from 'react'
import { MdOutlineSwapHorizontalCircle } from 'react-icons/md'
import {MainCointer, ContentContainer, ImageBox, ContentBox, HeaderBox} from "../../homeComp/atension/styles"
import { Header, Mixology, Text } from "../../homeComp/experience/styles"
import Relax from "../../../assets/relax.jpg"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SeatRelax = () => {
    
    const ref = useRef<HTMLDivElement>(null)
    gsap.registerPlugin(ScrollTrigger);

    const imageRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.fromTo(ref.current, {opacity:0, autoAlpha: 0}, {opacity: 1, autoAlpha:1, duration: 2, scrollTrigger: {
            trigger: ref.current,
            start: "30% bottom",
        }})
        gsap.fromTo(contentRef.current, {opacity:0, autoAlpha: 0}, {opacity: 1, autoAlpha:1, duration: 2, scrollTrigger: {
            trigger: contentRef.current,
            start: "30% bottom",
        }})
        gsap.fromTo(imageRef.current, {opacity:0, autoAlpha: 0}, {opacity: 1, autoAlpha:1, duration: 2, scrollTrigger: {
            trigger: imageRef.current,
            start: "30% bottom",
        }})

    })
  
    return (
    <MainCointer>
        <ContentContainer>
            <ContentBox ref={contentRef}>
            <Mixology>OUR BAR</Mixology>
            <HeaderBox>
                <Header variant='h3'>Sit back & relax</Header>
            </HeaderBox>
                <Text sx={{marginBottom: ".5rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.</Text>
                <Text sx={{marginBottom: ".5rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit ipsum ac rhoncus vehicula. Curabitur ac nibh lorem. Pellentesque blandit non nisi rutrum sollicitudin.</Text>
                <Text>Curabitur interdum nunc sit amet ornare aliquet. Nunc in feugiat nisi. Nam elit felis, consectetur sit amet ex quis, accumsan placerat felis. Donec vel quam odio amet volutpat .</Text>
            </ContentBox>
        </ContentContainer>
        <ImageBox ref={imageRef}>
            <img src={Relax} />
        </ImageBox>
    </MainCointer>
  )
}

export default SeatRelax