import React, {useEffect, useRef} from 'react'
import { MainCointer, ContentBox, ContentContainer, } from "../../homeComp/atension/styles"
import { Mixology, Header, Text } from "../../homeComp/experience/styles"
import { TextBox } from '../../homeComp/atension/styles'
import { GoPrimitiveDot } from 'react-icons/go';
import { ImageBox,BarBox,WineBox } from './styles';
import Bar from  "../../../assets/rustic2.jpg";
import Wine from "../../../assets/rustic1.jpg"; 
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Rustec = () => {
    gsap.registerPlugin(ScrollTrigger)

    const ref = useRef<HTMLDivElement>(null)
    const rustecRef = useRef<HTMLDivElement>(null)
    
   
        useEffect(() => {
            gsap.fromTo(ref.current, {y: 0}, {y: 100, scrollTrigger: {
                trigger:ref.current,
                scrub: true,
                start: "80% bottom",
                end: "bottom top",
                toggleActions: "restart complete complete reverse"
            }})
            gsap.fromTo(rustecRef.current, {opacity:0, autoAlpha:0}, {opacity:1, autoAlpha: 1, duration: 2, scrollTrigger: {
                trigger: rustecRef.current,
                start: "20% bottom",
          
            }})
        }, [])

    return (
        <MainCointer>
            <ImageBox>
                <BarBox ref={ref} className='box'>
                    <img src={Bar} />
                </BarBox>
                <WineBox className='box'>
                    <img src={Wine} />
                </WineBox>
            </ImageBox>
            <ContentContainer >
                <ContentBox ref={rustecRef} style={{marginLeft: "auto"}}>
                    <Mixology>OUR DECOR</Mixology>
                    <Header variant='h3'>Rustic Style</Header>
                    <Text sx={{marginBottom: ".5rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit ipsum ac rhoncus vehicula. Curabitur ac nibh lorem. Pellentesque blandit non nisi rutrum sollicitudin.</Text>
                    <Text sx={{marginBottom: ".5rem"}}>Curabitur interdum nunc sit amet ornare aliquet. Nunc in feugiat nisi. Nam elit felis, consectetur sit amet ex quis, accumsan placerat felis. Donec vel quam odio. Vestibulum sit amet volutpat .</Text>
                    <TextBox>
                        <GoPrimitiveDot className='dot' color='#b26500' />
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorp.</Text>
                    </TextBox>
                    <TextBox>
                        <GoPrimitiveDot className='dot' color='#b26500' />
                        <Text>Curabitur interdum nunc sit amet ornare aliqhum.</Text>
                    </TextBox>
                    <TextBox>
                        <GoPrimitiveDot className='dot' color='#b26500' />
                        <Text>Consectetur adipiscing elit. Ut elit lorem ipsuet tellus, luctus nec ullamcorp.</Text>
                    </TextBox>
                </ContentBox>
            </ContentContainer>
        </MainCointer>
    )
}

export default Rustec