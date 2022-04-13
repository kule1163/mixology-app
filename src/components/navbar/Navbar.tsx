import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { FeaturesBox, BoxLink, ImageBox, FirstSection, LogoContainer, LogoBox, MainContainer, MenuBox, SecondSection, FeaturedItem, BoxText, } from "./styles"
import Visky from "../../assets/visky.jpg"
import Gin from "../../assets/glassofgin.jpg"
import Barwomen from "../../assets/barwomen.jpg"
import Barmen from "../../assets/barmen.jpg"
import Cocktail from "../../assets/cocktailHome.jpg"
import Logo from "../../assets/logo.png"
import gsap from "gsap"
import { CgMenu } from 'react-icons/cg';
import { useAppDispatch } from '../../app/hooks'
import { setShow } from '../../features/cocktails/cocktailSlice'
import Fixed from "./Fixed"
import { Typography } from '@mui/material'
import { useNavigate, Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';



const Navbar = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [index, setIndex] = useState(0)
    const [change, setChange] = useState("cocktail")

    const images = ["visky", "barmen", "barwomen", "cocktail"]

    const el = useRef<HTMLImageElement>(null)
    const q = gsap.utils.selector(el)
    const tl = useRef<GSAPTimeline>()

    useEffect(() => {
        gsap.fromTo(".text", { opacity: 0, autoAlpha: 0,}, { opacity: 1, autoAlpha: 1, duration: 2, delay: 1 })
    }, [])

    useEffect(() => {
        const changeImage = setInterval(() => {
            if (images.length - 1 === index) {
                setIndex(0)
                setChange(images[index])
            } else {
                setIndex(prev => prev + 1)
                setChange(images[index])
            }
        }, 6000)

        return () => clearInterval(changeImage)
    }, [index])

    useEffect(() => {
        gsap.fromTo(".img", {scale: 1}, {scale:1.2, duration: 6})
        gsap.fromTo(".img", {autoAlpha: 0}, {autoAlpha: 1})
        /* tl.current = gsap.timeline()
           
            .fromTo(q(".img"), { scale: 1}, { scale: 1.2, duration: 6,}) */
    }, [index])

    return (
        <>
            <MainContainer>
                {/* <Fixed /> */}
                <SecondSection>
                    <ImageBox ref={el}>
                        {/* <LazyLoadImage 
                            src={Visky}
                            className={`img ${change === "visky" && "show"}`}
                        />
                        <LazyLoadImage 
                            src={Barmen}
                            className={`img ${change === "barmen" && "show"}`}
                        />
                        <LazyLoadImage 
                            src={Barwomen}
                            className={`img ${change === "barwomen" && "show"}`}
                        />
                        <LazyLoadImage 
                            src={Cocktail}
                            className={`img ${change === "cocktail" && "show"}`}
                        /> */}
                        <img className={`img ${change === "visky" && "show"}`} src={Visky} />
                        <img className={`img ${change === "barmen" && "show"}`} src={Barmen} />
                        <img className={`img ${change === "barwomen" && "show"}`} src={Barwomen} />
                        <img className={`img ${change === "cocktail" && "show"}`} src={Cocktail} />
                        {/* <div style={{backgroundImage: `url(${images[index]})`, backgroundPosition: "center", backgroundSize: "cover", width: "100%", height:"100%"}}  className='img'>

                </div> */}
                    </ImageBox>
                    <FeaturesBox>
                        <BoxLink to="/reserve">
                            <FeaturedItem className='box'>
                                <BoxText className='text'>Reservations</BoxText>
                            </FeaturedItem>
                        </BoxLink>
                        <BoxLink to="/about">
                            <FeaturedItem className='box'>
                                <BoxText className="text">About Us</BoxText>
                            </FeaturedItem>
                        </BoxLink>
                        <BoxLink to="/menu">
                            <FeaturedItem className='box'>
                                <BoxText className='text'>Our Menu</BoxText>
                            </FeaturedItem>
                        </BoxLink>
                    </FeaturesBox>
                </SecondSection>
            </MainContainer>

        </>
    )
}

export default Navbar