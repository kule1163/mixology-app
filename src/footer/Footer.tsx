import React, {useRef, useEffect} from 'react'
import ContactUs from './ContactUs'
import { BottomContainer, FirstSection, MainContainer, UpBox } from './styles'
import Logo from "../assets/logo.png"
import VisitUs from './VisitUs'
import FooterMenu from './FooterMenu'
import { IoIosArrowUp} from 'react-icons/io';
import { ButtonPrimary } from '../components/homeComp/cocktails/styles'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Footer = () => {
    gsap.registerPlugin(ScrollTrigger)

    const contactRef = useRef<HTMLDivElement>(null)
    const visitRef = useRef<HTMLDivElement>(null)
    const logoRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        gsap.fromTo(contactRef.current, {opacity:0, autoAlpha:0}, {opacity:1, autoAlpha: 1, duration: 2, scrollTrigger: {
            trigger: contactRef.current,
            start: "center bottom",
            
          }})
          gsap.fromTo(visitRef.current, {opacity:0, autoAlpha:0}, {opacity:1, autoAlpha: 1, duration: 2, scrollTrigger: {
            trigger: visitRef.current,
            start: "center bottom",
            
          }})
          gsap.fromTo(logoRef.current, {opacity:0, autoAlpha:0}, {opacity:1, autoAlpha: 1, duration: 2, scrollTrigger: {
            trigger: logoRef.current,
            start: "center bottom",
            
          }})
          gsap.fromTo(buttonRef.current, {opacity:0, autoAlpha:0}, {opacity:1, autoAlpha: 1, duration: 1, scrollTrigger: {
            trigger: buttonRef.current,
            start: "bottom bottom",
            
          }})
    })
  
    return (
    <MainContainer>
        <FirstSection>
            <div style={{visibility: "hidden"}} ref={contactRef}>
                <ContactUs />
            </div>
            <div  ref={logoRef} style={{display: "flex", alignItems: "center", justifyContent: "center", visibility: "hidden"}}>
                <img src={Logo}/>
            </div>
           <div style={{visibility: "hidden"}} ref={visitRef}>
                <VisitUs />
           </div>
        </FirstSection>
        <FooterMenu />
        <BottomContainer>
            <UpBox onClick={() => window.scrollTo(0, 0)}>
                <ButtonPrimary ref={buttonRef}>
                    <IoIosArrowUp style={{fontSize: "15px"}}/>
                </ButtonPrimary>
            </UpBox>
        </BottomContainer>
    </MainContainer>
  )
}

export default Footer