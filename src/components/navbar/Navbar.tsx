import React, { useEffect, useRef, useState } from 'react'
import { FeaturesBox, BoxLink, ImageBox, MainContainer, SecondSection, FeaturedItem, BoxText, } from "./styles"
import Visky from "../../assets/visky.jpg"
import Barwomen from "../../assets/barwomen.jpg"
import Barmen from "../../assets/barmen.jpg"
import Cocktail from "../../assets/cocktailHome.jpg"
import gsap from "gsap"
import 'react-lazy-load-image-component/src/effects/blur.css';

const Navbar = () => {

    const [index, setIndex] = useState(0)
    const [change, setChange] = useState("cocktail")

    const images = ["visky", "barmen", "barwomen", "cocktail"]

    const el = useRef<HTMLImageElement>(null)

    useEffect(() => {
        gsap.fromTo(".text", { opacity: 0, autoAlpha: 0, }, { opacity: 1, autoAlpha: 1, duration: 2, delay: 1 })
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
        gsap.fromTo(".img", { scale: 1 }, { scale: 1.2, duration: 6 })
        gsap.fromTo(".img", { autoAlpha: 0 }, { autoAlpha: 1 })

    }, [index])

    return (
        <>
            <MainContainer>
                <SecondSection>
                    <ImageBox ref={el}>
                        <img className={`img ${change === "visky" && "show"}`} src={Visky} />
                        <img className={`img ${change === "barmen" && "show"}`} src={Barmen} />
                        <img className={`img ${change === "barwomen" && "show"}`} src={Barwomen} />
                        <img className={`img ${change === "cocktail" && "show"}`} src={Cocktail} />
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