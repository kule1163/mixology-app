import React, { useEffect, useRef } from 'react'
import { MainContainer, ItemBox, } from './styles'
import Gallery from "../../../assets/gallery1.jpg"
import GalleryS from "../../../assets/gallery2.jpg"
import GalleryT from "../../../assets/gallery3.jpg"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GalleryImage = () => {
    gsap.registerPlugin(ScrollTrigger)

    const refFirst = useRef<HTMLDivElement>(null)
    const refSecond = useRef<HTMLDivElement>(null)
    const refCont = useRef<HTMLDivElement>(null)

    const tl = useRef<HTMLDivElement>(null)

    useEffect(() => {
        ScrollTrigger.matchMedia({
            "(min-width: 700px)": function () {
                gsap.to(refFirst.current, {
                    y: -100, scrollTrigger: {
                        trigger: refFirst.current,
                        scrub: 1,
                        toggleActions: "restart complete complete reverse",
                        start: "top bottom",
                        end: "bottom top"
                    }
                })
                gsap.to(refSecond.current, {
                    y: -100, scrollTrigger: {
                        trigger: refSecond.current,
                        scrub: 1,
                        toggleActions: "restart complete complete reverse",
                        start: "top bottom",
                        end: "bottom top"
                    }
                })
            }
        })
    })

    return (
        <MainContainer ref={refCont}>
            <div style={{ position: "relative" }}>
                <ItemBox className='parallax' ref={refFirst} >
                    <img src={Gallery} />
                </ItemBox>
            </div>
            <ItemBox>
                <img src={GalleryS} />
            </ItemBox>
            <div style={{ position: "relative" }}>
                <ItemBox className='parallax' ref={refSecond}>
                    <img src={GalleryT} />
                </ItemBox>
            </div>
        </MainContainer>
    )
}

export default GalleryImage