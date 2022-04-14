import { Typography } from '@mui/material'
import React, {useRef } from 'react'
import { ButtonPrimary } from '../homeComp/cocktails/styles'
import { MainContainer } from './styles'
import gsap from "gsap"
import { useNavigate } from 'react-router-dom'

interface FeaturesProps {
    buttonText: string;
    header: string;
    background: string;
    path: string;
}

const Features = ({buttonText, header, background, path}: FeaturesProps) => {
  
  const ref = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const navigate = useNavigate()
  
  const onMouseEnter = () => {
    gsap.to(ref.current, {backgroundSize: "100% 100%", duration: 1})
    gsap.to(contentRef.current, {scale: 1.1, duration: 1})
  }

  const onMouseLeave = () => {
    gsap.to(ref.current, {backgroundSize: "125% 125%", duration: 1})
    gsap.to(contentRef.current, {scale: 1, duration: 1})
  }

  const handleClick = () => {
    window.scrollTo(0,0)

    navigate(`${path}`)
  }
  
  return (
    <MainContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} ref={ref} background={background}>
        <div ref={contentRef} style={{ overflow: "hidden", display: "inline-flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
          <Typography sx={{color: "white", cursor: "default"}} variant="h4">{header}</Typography>
          <ButtonPrimary style={{visibility: "visible"}} onClick={handleClick}>{buttonText}</ButtonPrimary>
        </div>
    </MainContainer>
  )
}

export default Features