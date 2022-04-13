import React, { useEffect, useRef, useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import Cocktails from '../../components/homeComp/cocktails/Cocktails'
import Experience from '../../components/homeComp/experience/Experience'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import DrinkSlider from '../../components/slider/DrinkSlider'
import { MainContainer, SectionContainer, SideBarBox, ComemntSliderBox, LeftQuotes, RightQuotes, FeaturesBox, LeftBox, RightBox } from "./styles"
import CommentsSlider from "../../components/slider/CommentsSlider"
import { ImQuotesLeft } from 'react-icons/im';
import { ImQuotesRight } from 'react-icons/im';
import Atension from '../../components/homeComp/atension/Atension'
import Fresh from '../../components/homeComp/fresh/Fresh'
import Features from '../../components/ourFeatures/Features'
import AboutUs from "../../assets/aboutUs.jpg"
import OurMenu from "../../assets/ourMenu.jpg"
import Contact from '../../components/contact/Contact'
import Footer from '../../footer/Footer'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";




const Home = () => {
    const show = useAppSelector(state => state.cocktail.show)

    const freshDiv = useRef<HTMLDivElement>(null)
    
 
    

    const [xPosition, setXPosition] = useState<number>(1)
    const [yPosition, setYPosition] = useState<number>(1)
    const currentRef = useRef<HTMLDivElement>(null)

    const handleMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        var w = e.clientX - window.innerWidth / 2;
        var h = window.innerHeight;

    
        
        /* if (w && h) {
            if (e.clientX < (w / 2)) {
                setXPosition((e.clientX - w / 2) / 30)
            } else {
                setXPosition(e.clientX / 30)
            }
            if (e.clientY < (h / 2)) {
                setYPosition((e.clientY - h / 2) / 20)
            } else {
                setYPosition(e.clientY / 20)
            }
        } */
        
        /* setYPosition(Math.floor(e.clientY / 20)) */
    }

    const leftRef = useRef<HTMLDivElement>(null)
    const rightRef = useRef<HTMLDivElement>(null)

    const el = useRef<HTMLDivElement>(null)
    const q = gsap.utils.selector(el)
    const tl = useRef<GSAPTimeline>()

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

    return (
        <MainContainer>
            <Navbar />
            <SideBarBox show={show}>
                <Sidebar />
            </SideBarBox>
            <SectionContainer>


                <Experience />

                <Cocktails />

                <ComemntSliderBox>
                    {/* <LeftQuotes>
                        <ImQuotesLeft color='white' />
                    </LeftQuotes>
                    <RightQuotes>
                        <ImQuotesRight color='white' />
                    </RightQuotes> */}
                    <CommentsSlider />
                </ComemntSliderBox>
                <div onMouseMove={e => handleMove(e)} ref={currentRef} style={{ display: "flex", flexDirection: "column" }}>
                    <Atension xPosition={xPosition} yPosition={yPosition} />
                    <div ref={freshDiv}>
                    <Fresh xPosition={xPosition} yPosition={yPosition} />
                    </div>
                </div>
                <FeaturesBox ref={el}>
                    <LeftBox ref={leftRef} className="left">
                        <Features path="/about" buttonText='ABOUT US' header='Our Bar' background={AboutUs} />
                    </LeftBox>
                    <RightBox ref={rightRef} className="right">
                        <Features path="/menu" buttonText='OUR MENU' header='Our Cocktails' background={OurMenu} />
                    </RightBox>
                </FeaturesBox>
                <Contact />
      {/*           <Footer /> */}
            </SectionContainer>

        </MainContainer>
    )
}

export default Home