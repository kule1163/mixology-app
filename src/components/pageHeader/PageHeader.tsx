import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Typography } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`

interface ImageContainerProps {
    image?: string
}
const ImageContainer = styled.div<ImageContainerProps>`
    position: relative;
    width: 100%;
    
    & img {
        object-fit: cover;
        width: 100%;
        height: 45vh;
    }; 
    &:after {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(0,0,0,.7);
    }
`
export const Header = styled(Typography)`
    color: white;
    text-align: center;
`

interface PageHeaderProps {
    image: string;
    header: string;
}

const PageHeader = ({image, header}: PageHeaderProps) => {
    gsap.registerPlugin(ScrollTrigger);

    const headerRef = useRef<HTMLDivElement>(null)
    const ref = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLImageElement>(null)
    const dRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.fromTo(headerRef.current, {y: 0}, {y: -50, scrollTrigger: {
            trigger:ref.current,
            scrub: 1,
            start: "top top",
            toggleActions: "restart complete complete reverse"
        }})
        gsap.fromTo(imageRef.current, {autoAlpha: 0, opacity: 0}, {autoAlpha: 1, opacity: 1, duration: 2})
        gsap.fromTo(dRef.current, {autoAlpha: 0, opacity: 0}, {autoAlpha: 1, opacity: 1, duration: 2})
    }, [])
  
    return (
  <MainContainer ref={ref}>
        <ImageContainer >
            <LazyLoadImage 
                src={image}
                effect="blur"
                width="100%"
                height="100%"
            />
    </ImageContainer>
    <div ref={headerRef} style={{marginTop: "1.5rem", zIndex: "10", position: "absolute", left: "50%", transform: "translateX(-50%)", bottom: "-2rem"}}>
        <Header style={{marginBottom: "0 !important"}} variant="h3">{header}</Header>
    </div>
  </MainContainer>
  )
}

export default PageHeader