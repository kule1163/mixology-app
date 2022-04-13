import React, {useRef, useEffect, useState} from 'react'
import {ContentBox,ContentContainer,ImageBox,MainCointer, TextBox, HeaderBox} from "./styles"
import Barmen from  "../../../assets/barmenDetail.jpg"
import { Header, Mixology, Text } from '../experience/styles'
import { Typography } from '@mui/material'
import { GoPrimitiveDot } from 'react-icons/go';
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { width } from '@mui/system'

interface AtensionProps {
    xPosition?: number;
    yPosition?: number
}

const Atension = ({xPosition,yPosition}: AtensionProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const currentRef = useRef<HTMLDivElement>(null)
    gsap.registerPlugin(ScrollTrigger);

    const imageRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.fromTo(currentRef.current, {opacity:0, autoAlpha: 0}, {opacity: 1, autoAlpha:1, duration: 2, scrollTrigger: {
            trigger: currentRef.current,
            start: "30% bottom",
        }})
        gsap.fromTo(imageRef.current, {opacity:0, autoAlpha: 0}, {opacity: 1, autoAlpha:1, duration: 2, scrollTrigger: {
            trigger: imageRef.current,
            start: "30% bottom",
        }})

    })

    /* const [xPosition, setXPosition] = useState<number>(1)
    const [yPosition, setYPosition] = useState<number>(1) */
    const [clientX, setClientX] = useState<number>()
    const [clienty, setClienty] = useState<number>()
    
    const [sx, setSx] = useState(0)
    const [sy, setSy] = useState(0)





   /*  const handleMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  
        setClienty(imageRef.current?.getBoundingClientRect().top)
        setClientX(imageRef.current?.getBoundingClientRect().left)
        var w = currentRef.current?.offsetWidth;
        var h = currentRef.current?.offsetHeight;
        console.log("wwwwwwww", w, "eeeee", e.clientX);
        if(w && h) {
            if(e.clientX <( w / 2)) {
                setXPosition((e.clientX - w/2) / 30)
            } else {
                setXPosition(e.clientX / 30)
            }
            if(e.clientY <( h / 2)) {
                setYPosition((e.clientY - h/2) / 20)
            } else {
                setYPosition(e.clientY / 20)
            }
        }

        
        setXPosition(e.clientX / 30)
        setYPosition(e.clientY / 30)
       
    }
    console.log("asdasdsa",xPosition); */
 /*    
    useEffect(() => {
        gsap.to(imageRef.current, {x: xPosition, y: yPosition, overwrite: "auto"})
       
    }, [xPosition, yPosition]) */

    

    return (
    <MainCointer ref={ref}>
        <ContentContainer /* onMouseMove={(e) => handleMove(e)} */>
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
       {/*  <div style={{position: "absolute", top: `${400 + yPosition}px`, left: `${400 + xPosition}px`}}> */}
        <ImageBox /* style={{border: "solid red 1px"}} */ ref={imageRef}>
            <img src={Barmen} />
        </ImageBox>
        {/* </div> */}
    </MainCointer>
  )
}

export default Atension