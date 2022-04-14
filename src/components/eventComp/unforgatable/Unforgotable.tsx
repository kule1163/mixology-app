import React, {useRef, useEffect} from 'react'
import {ContentBox,ContentContainer,ImageBox,MainCointer, TextBox, HeaderBox} from "../../homeComp/atension/styles"
import { Header, Mixology, Text } from "../../homeComp/experience/styles"
import { GoPrimitiveDot } from 'react-icons/go';
import { TextContainer } from './styles';
import Moment from  "../../../assets/unforgetable.jpg"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Unforgotable = () => {
    gsap.registerPlugin(ScrollTrigger)
  
    const imageRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.fromTo(imageRef.current, {opacity:0, autoAlpha:0}, {opacity:1, autoAlpha: 1, duration: 2, scrollTrigger: {
            trigger: imageRef.current,
            start: "center bottom",
          }})
          gsap.fromTo(contentRef.current, {opacity:0, autoAlpha:0}, {opacity:1, autoAlpha: 1, duration: 2, scrollTrigger: {
            trigger: contentRef.current,
            start: "20% bottom",
          }})
    }, [])

    return (
    <MainCointer>
        <ContentContainer>
           <ContentBox ref={contentRef}>
           <Mixology>WE HOST YOUR EVENT</Mixology>
            <HeaderBox>
                <Header variant='h3'>Unforgetable Moments</Header>
            </HeaderBox>
            <Text style={{marginBottom: "2rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.</Text>
            <TextContainer>
            <TextBox>
                <GoPrimitiveDot className='dot' color='#b26500' />
                <Text>Bussiness Events</Text>
            </TextBox>
            <TextBox>
                <GoPrimitiveDot className='dot' color='#b26500' />
                <Text>Charity Events</Text>
            </TextBox>
            <TextBox>
                <GoPrimitiveDot className='dot' color='#b26500' />
                <Text>Birthday Parties</Text>
            </TextBox>
            <TextBox>
                <GoPrimitiveDot className='dot' color='#b26500' />
                <Text>Company Events</Text>
            </TextBox>
            <TextBox>
                <GoPrimitiveDot className='dot' color='#b26500' />
                <Text>Social Events</Text>
            </TextBox>
            <TextBox>
                <GoPrimitiveDot className='dot' color='#b26500' />
                <Text>Team Parties</Text>
            </TextBox>
            </TextContainer>
           </ContentBox>
        </ContentContainer>
        <ImageBox ref={imageRef}>
            <img src={Moment} />
        </ImageBox>
    </MainCointer>
  )
}

export default Unforgotable