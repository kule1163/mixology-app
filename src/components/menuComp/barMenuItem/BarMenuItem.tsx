import React, {useEffect, useRef} from 'react'
import { Header, Mixology, Text } from "../../homeComp/experience/styles"
import { MainContainer,HeaderBox,ItemBox,Line,SectionContainer } from './styles'
import { SingleBarItem } from '../../../utils/menuItems';
import gsap from "gsap"

interface BarMenuItemProps {
    mixology: string;
    header: string;
    background: string;
    list: SingleBarItem[];
}

const BarMenuItem = ({mixology, header, list, background}: BarMenuItemProps) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.fromTo(ref.current, {opacity:0, autoAlpha: 0}, {opacity: 1, autoAlpha:1, duration: 2, scrollTrigger: {
            trigger: ref.current,
            start: "20% bottom",
        }})
    },[])
  
    return (
    <MainContainer background={background}>
        <div ref={ref} style={{zIndex: "10"}}>
        <Mixology sx={{textAlign: "center !important"}}>{mixology}</Mixology>
        <Header variant='h3'>{header}</Header>
        <SectionContainer>
            {list.map(item => (
                <ItemBox key={item.id}>
                <HeaderBox>
                    <Text sx={{flexShrink: "0"}}>{item.title}</Text>
                    <Line></Line>
                    <Text>${item.price}</Text>
                </HeaderBox>
                <Text>{item.desc}</Text>
            </ItemBox>
            ))}
        </SectionContainer>
        </div>
    </MainContainer>
  )
}

export default BarMenuItem