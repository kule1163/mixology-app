import React, {useRef, useEffect} from 'react'
import { InfoBox, InfoContainer, MainContainer, ItemBox } from './styles'
import { Mixology, Header, } from "../../homeComp/experience/styles"
import Visky from "../../../assets/viskyman.jpg"
import { SectionContainer, } from '../../contact/styles'
import { contacts } from '../../../utils/contacts'
import { Typography } from '@mui/material'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Info = () => {
    gsap.registerPlugin(ScrollTrigger)

    const infoRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.fromTo(infoRef.current, {opacity:0, autoAlpha:0}, {opacity:1, autoAlpha: 1, duration: 2, scrollTrigger: {
            trigger: infoRef.current,
            start: "center bottom",  
        }})
        gsap.fromTo(containerRef.current, {opacity:0, autoAlpha:0}, {opacity:1, autoAlpha: 1, duration: 2, scrollTrigger: {
        trigger: containerRef.current,
        start: "30% bottom",
        }})
    })

    return (
        <InfoContainer ref={containerRef}>
            <img src={Visky}/>
            <InfoBox ref={infoRef}>
                    {contacts.map(item => (
                        <ItemBox key={item.id} style={{justifyContent: "start !important"}}>
                            <item.icon style={{fontSize: "25px", marginRight: ".5rem"}} color='white'/>
                            <Typography sx={{color: "white", fontSize: "1.4em", marginBottom: ".5rem"}}>{item.text}</Typography>
                        </ItemBox>
                    ))}
            </InfoBox>
        </InfoContainer>
  
  )
}

export default Info