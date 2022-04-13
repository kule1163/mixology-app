import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FeaturesBox, ImageBox, FirstSection, LogoContainer, LogoBox, MainContainer, MenuBox, SecondSection, FeaturedItem, BoxText, BoxLink} from "./styles"
import { CgMenu } from 'react-icons/cg';
import { useAppDispatch } from '../../app/hooks'
import { setShow } from '../../features/cocktails/cocktailSlice'
import Logo from "../../assets/logo.png"
import gsap from "gsap"
import { Text } from "../homeComp/experience/styles";
import { useLocation } from 'react-router-dom';

const Fixed = () => {

  const [windowSize, setWindowSize] = useState<number>(window.innerWidth)

  const el = useRef<HTMLDivElement>(null)
  const q = gsap.utils.selector(el)
  const tl = useRef<GSAPTimeline>()

  const location = useLocation()

  const handleWindowResize = useCallback(event => {
    setWindowSize(window.innerWidth)
  }, [])

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    
    return () => {
      window.addEventListener("resize", handleWindowResize)
    }
    
  }, [handleWindowResize])


  useEffect(() => {
    if(windowSize > 700) {
     /*  gsap.fromTo(".a", {autoAlpha: 0}, {autoAlpha: 1}) */
      tl.current = gsap.timeline()
      .fromTo(q(".menu"), {y: -50, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 2}, 0)
      .fromTo(q(".logo"), {y: -50, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 2}, 0)
    } else {
      tl.current = gsap.timeline()
      .fromTo(q(".menu"), {opacity: 0, autoAlpha: 0}, {opacity: 1, autoAlpha: 1, duration: 2}, 0)
      .fromTo(q(".logo"), {opacity: 0, autoAlpha: 0}, {opacity: 1, autoAlpha: 1, duration: 2}, 0)
    }
  }, [location.pathname])

  const dispatch = useAppDispatch()
  return (
    <MainContainer ref={el}>
      <FirstSection>
        <MenuBox onClick={() => dispatch(setShow(true))} className='box'>
          <div className='menu a' style={{display: "flex", alignItems: "center", visibility: "hidden"}}>
            <CgMenu color='white' style={{ marginRight: "1rem"}} />
            <BoxText>Menu</BoxText>
          </div>
        </MenuBox>
        <LogoContainer className='box'>
            <LogoBox >
            <BoxLink to="/">
              <div style={{visibility: "hidden"}} className='logo a'>
              <img src={Logo} />
              </div>
              </BoxLink>
            </LogoBox>
        </LogoContainer>
      </FirstSection>
    </MainContainer>
  )
}

export default Fixed