import React, { useRef, useState, useEffect } from 'react'
import { ButtonPrimary } from '../homeComp/cocktails/styles'
import { Header, Mixology, Text } from "../homeComp/experience/styles"
import { ContentContainer, FaqContainer, ItemBox, MainContainer, QuestionBox, QuestionText, SectionContainer, TextBox, } from "./styles"
import { MdKeyboardArrowDown } from 'react-icons/md';
import { faqItems } from '../../utils/faqItems';
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MakeReservation = () => {

  gsap.registerPlugin(ScrollTrigger)

  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const [currentID, setCurrentID] = useState<string>()

  useEffect(() => {
    gsap.fromTo(sectionRef.current, {opacity:0, autoAlpha:0}, {opacity:1, autoAlpha: 1, duration: 2, scrollTrigger: {
      trigger: sectionRef.current,
      start: "20% bottom",
 
    }})
    gsap.fromTo(contentRef.current, {opacity:0, autoAlpha:0}, {opacity:1, autoAlpha: 1, duration: 2, scrollTrigger: {
      trigger: contentRef.current,
      start: "20% bottom",

    }})
  }, [])


  const ref = useRef<HTMLDivElement>(null)
  
  const handleClick = (id:string) => {
    if(id === currentID) {
      setCurrentID("")
    }
    
  }
 

  return (
    <MainContainer>
      <ContentContainer ref={contentRef}>
        <Mixology>BOOK NOW</Mixology>
        <Header variant='h3'>Make a Reservation</Header>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus orem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsuet. </Text>
        <div>
          <ButtonPrimary style={{ textAlign: "center" }}>Reservations</ButtonPrimary>
        </div>
      </ContentContainer>
      <SectionContainer ref={sectionRef}>
        <FaqContainer>
          {faqItems.map((item, index) => (
            <ItemBox key={item.id}>
              <QuestionBox onClick={(e) => {
                setCurrentID(item.id) 
                handleClick(item.id)
                
              }}>
                <QuestionText>{item.question}</QuestionText>
                <MdKeyboardArrowDown style={{ fontSize: "25px" }} />
              </QuestionBox>
              <TextBox ref={ref} className={currentID === item.id ? `show` : ``} >
                <Text style={{padding: "1rem"}}>
                  {item.answer}
                </Text>
              </TextBox>
            </ItemBox>
          ))}
        </FaqContainer>
      </SectionContainer>
    </MainContainer>
  )
}

export default MakeReservation