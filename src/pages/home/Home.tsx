import React, { useEffect, useRef} from 'react'
import { useAppSelector } from '../../app/hooks'
import Cocktails from '../../components/homeComp/cocktails/Cocktails'
import Experience from '../../components/homeComp/experience/Experience'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { MainContainer, SectionContainer, SideBarBox, ComemntSliderBox, FeaturesBox, LeftBox, RightBox } from "./styles"
import CommentsSlider from "../../components/slider/CommentsSlider"
import Atension from '../../components/homeComp/atension/Atension'
import Fresh from '../../components/homeComp/fresh/Fresh'
import Features from '../../components/ourFeatures/Features'
import AboutUs from "../../assets/aboutUs.jpg"
import OurMenu from "../../assets/ourMenu.jpg"
import Contact from '../../components/contact/Contact'
import gsap from "gsap"

const Home = () => {
    const show = useAppSelector(state => state.cocktail.show)

    const leftRef = useRef<HTMLDivElement>(null)
    const rightRef = useRef<HTMLDivElement>(null)
    const el = useRef<HTMLDivElement>(null)
   
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
                    <CommentsSlider />
                </ComemntSliderBox>
                    <Atension />
                    <Fresh />
                <FeaturesBox ref={el}>
                    <LeftBox ref={leftRef} className="left">
                        <Features path="/about" buttonText='ABOUT US' header='Our Bar' background={AboutUs} />
                    </LeftBox>
                    <RightBox ref={rightRef} className="right">
                        <Features path="/menu" buttonText='OUR MENU' header='Our Cocktails' background={OurMenu} />
                    </RightBox>
                </FeaturesBox>
                <Contact />
            </SectionContainer>
        </MainContainer>
    )
}

export default Home