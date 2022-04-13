import React, {useRef, useEffect} from 'react'
import PageHeader from '../../components/pageHeader/PageHeader'
import {BookaTableBox, ButtonBox, ButtonSecondry, MainContainer,} from "./styles"
import AboutImage from "../../assets/about.jpg"
import SeatRelax from '../../components/aboutComp/seatRelax/SeatRelax'
import { FeaturesBox, LeftBox, RightBox } from '../home/styles'
import Features from '../../components/ourFeatures/Features'
import Cocktail from "../../assets/ourCocktail.jpg"
import Reserve from "../../assets/reserve.jpg"
import Rustec from '../../components/aboutComp/rustec/Rustec'
import Quality from '../../components/aboutComp/quality/Quality'
import BookaTable from "../../assets/bookatable.jpg"
import { Header } from '../../components/homeComp/experience/styles'
import { ButtonPrimary } from '../../components/homeComp/cocktails/styles'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from 'react-router-dom'


const About = () => {
  gsap.registerPlugin(ScrollTrigger)

  const navigate = useNavigate()


  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const el = useRef<HTMLDivElement>(null)

  const buttonRef = useRef<HTMLDivElement>(null)
  const tableRef = useRef<HTMLDivElement>(null)
  

  useEffect(() => {

    
    gsap.fromTo(buttonRef.current, {opacity:0, autoAlpha:0}, {opacity:1, autoAlpha: 1, duration: 2, scrollTrigger: {
      trigger: buttonRef.current,
      start: "40% bottom",

    }})
    
    gsap.fromTo(tableRef.current, {backgroundPositionY: "0"}, {backgroundPositionY: "60%", scrollTrigger: {
      trigger: tableRef.current,
      start: "top bottom",
      toggleActions: "restart complete complete reverse",
      scrub: true
  }}) 
  }, [])

    

    useEffect(() => {
        gsap.fromTo(leftRef.current, { autoAlpha: 0 }, {
            autoAlpha: 1, duration: 1, scrollTrigger: {
                trigger: el.current,
    
            }
        })
        gsap.fromTo(rightRef.current, { autoAlpha: 0 }, {
            autoAlpha: 1, duration: 1, delay: .5, scrollTrigger: {
                trigger: el.current,
      
            }
        })
    }, [])

    const handleClick = () => {
      window.scrollTo(0,0)

      navigate("/reserve")
    }
  
  return (
    <MainContainer>
        <PageHeader image={AboutImage} header="ABOUT"/>
        
          <SeatRelax />
        
        <FeaturesBox ref={el}>
          <LeftBox ref={leftRef}>
            <Features path='/reserve' header='Book a Table' buttonText="RESERVE" background={Reserve}/>
          </LeftBox>
          <RightBox ref={rightRef}>
            <Features path="/menu" header='Our Cocktails' buttonText='OUR MENU' background={Cocktail}/>
          </RightBox>
        </FeaturesBox>
     
        <Rustec />
     
       
          <Quality />
    
        <BookaTableBox ref={tableRef} background={BookaTable}>
          <ButtonBox ref={buttonRef}>
            <Header variant='h3' /* style={{marginBottom: "3rem"}} */>Book a Table</Header>
            <ButtonSecondry onClick={handleClick}>CONTACT US</ButtonSecondry>
          </ButtonBox>
        </BookaTableBox>
    </MainContainer>
  )
}

export default About