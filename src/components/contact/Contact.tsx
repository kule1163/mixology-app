import React, {useRef, useEffect} from 'react'
import { contacts } from '../../utils/contacts'
import { Mixology, Header } from "../homeComp/experience/styles"
import {ItemBox,MainContainer,SectionContainer, ImgContainer} from "./styles"
import { Typography } from '@mui/material'
import { ButtonPrimary } from '../homeComp/cocktails/styles'
import Wine from  "../../assets/wine.jpg"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from 'react-router-dom'



const Contact = () => {
    gsap.registerPlugin(ScrollTrigger)

    const ref = useRef<HTMLButtonElement>(null)
    const imgRef = useRef<HTMLImageElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    const navigate = useNavigate()

    useEffect(() => {
        gsap.fromTo(ref.current, {autoAlpha: 0}, {autoAlpha: 1, duration: 1, scrollTrigger: {
            trigger: ref.current,
            start: "30% bottom"
        }})
        gsap.fromTo(contentRef.current, {autoAlpha: 0}, {autoAlpha: 1, duration: 1, scrollTrigger: {
            trigger: contentRef.current,
            start: "30% bottom"
        }})
    }, [])

    useEffect(() => {
        gsap.to(imgRef.current, {objectPosition: "60% 60%", autoAlpha: 1, scrollTrigger:{
            trigger: imgRef.current,
            scrub: true,
            toggleActions: "restart complete complete reverse",
        }})
    }, [])

    const handleClick = () => {
        window.scrollTo(0,0)
  
        navigate("/reserve")
      }
  
    return (
    <>
    <MainContainer ref={contentRef}>
        <Mixology>VISIT US</Mixology>
        <Header variant="h3">Contact Us</Header>
        <SectionContainer>
            {contacts.map(item => (
                <ItemBox key={item.id}>
                    <item.icon style={{fontSize: "25px", marginRight: ".5rem"}} color='white'/>
                    <Typography sx={{color: "white", fontSize: "1.4em", marginBottom: ".5rem"}}>{item.text}</Typography>
                </ItemBox>
            ))}
        </SectionContainer>
        <ButtonPrimary onClick={handleClick} ref={ref}>BOOK A TABLE</ButtonPrimary>
    </MainContainer>
    <ImgContainer >
        <img ref={imgRef} src={Wine}/>
    </ImgContainer>
    </>
  )
}

export default Contact