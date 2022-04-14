import React, {useRef, useEffect, useState} from 'react'
import {ContentBox,ContentContainer,ImageBox,MainCointer, TextBox, HeaderBox} from "./styles"
import Barmen from  "../../../assets/barmenDetail.jpg"
import { Header, Mixology, Text } from '../experience/styles'
import { GoPrimitiveDot } from 'react-icons/go';
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Atension = () => {
    const ref = useRef<HTMLDivElement>(null)
    const currentRef = useRef<HTMLDivElement>(null)
    gsap.registerPlugin(ScrollTrigger);

    const imageRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.fromTo(currentRef.current, {opacity:0, autoAlpha: 0}, {opacity: 1, autoAlpha:1, duration: 2, scrollTrigger: {
            trigger: currentRef.current,
            start: "20% bottom",
        }})
        gsap.fromTo(imageRef.current, {opacity:0, autoAlpha: 0}, {opacity: 1, autoAlpha:1, duration: 2, scrollTrigger: {
            trigger: imageRef.current,
            start: "20% bottom",
        }})

    },[])

    return (
    <MainCointer ref={ref}>
        <ContentContainer>
           <ContentBox ref={currentRef}>
           <Mixology>MIXOLOGY</Mixology>
            <HeaderBox>
                <Header variant='h3'>Attention to Details</Header>
            </HeaderBox>
            <Text style={{marginBottom: "2rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.</Text>
            <TextBox>
                <GoPrimitiveDot className='dot' color='#b26500' />
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorp.</Text>
            </TextBox>
            <TextBox>
                <GoPrimitiveDot className='dot' color='#b26500' />
                <Text>Curabitur interdum nunc sit amet ornare aliqhum.</Text>
            </TextBox>
            <TextBox>
                <GoPrimitiveDot className='dot' color='#b26500' />
                <Text>Consectetur adipiscing elit. Ut elit lorem ipsuet tellus, luctus nec ullamcorp.</Text>
            </TextBox>
           </ContentBox>
        </ContentContainer>
        <ImageBox ref={imageRef}>
            <img src={Barmen} />
        </ImageBox>
    </MainCointer>
  )
}

export default Atension