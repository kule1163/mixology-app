import React, {useRef, useEffect} from 'react'
import { MainContainer, ContentBox, FirstSectionBox, ForthSectionContent, FourthSectionBox, SecondSectionBox, ThirdSectionBox, ThirdSectionText, } from "./styles"
import BlogPhoto from "../../../assets/awardwinnerwine.jpg"
import { Header, Mixology, Text } from "../../homeComp/experience/styles"
import Vine from "../../../assets/blogpostwine.jpg"
import { TextBox } from '../../homeComp/atension/styles'
import { GoPrimitiveDot } from 'react-icons/go';
import Barmen from "../../../assets/barmenDetail.jpg"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AwardsWinnerWine = () => {
    gsap.registerPlugin(ScrollTrigger)
    
    const firstPhotoRef = useRef<HTMLImageElement>(null)
    const firstHeaderRef = useRef<HTMLDivElement>(null)
    const firstTextRef = useRef<HTMLDivElement>(null)

    const secondPhotoRef = useRef<HTMLImageElement>(null)
    const secondContent = useRef<HTMLDivElement>(null)

    const thirdContainer = useRef<HTMLDivElement>(null)

    const fourthPhoto = useRef<HTMLImageElement>(null)
    const fourthContent = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.fromTo(firstPhotoRef.current, {opacity:0, autoAlpha:0}, {opacity:1, autoAlpha: 1, duration: 2, scrollTrigger: {
          trigger: firstPhotoRef.current,
          start: "20% bottom",
        }})
          gsap.fromTo(firstHeaderRef.current, {opacity:0, autoAlpha:0}, {opacity:1, autoAlpha: 1, duration: 2, scrollTrigger: {
            trigger: firstHeaderRef.current,
            start: "center bottom",

          }})
          gsap.fromTo(firstTextRef.current, {opacity:0, autoAlpha:0}, {opacity:1, autoAlpha: 1, duration: 2, scrollTrigger: {
            trigger: firstTextRef.current,
            start: "center bottom",

          }})
          gsap.fromTo(secondPhotoRef.current, {opacity:0, autoAlpha:0}, {opacity:1, autoAlpha: 1, duration: 2, scrollTrigger: {
            trigger: secondPhotoRef.current,
            start: "30% bottom",

          }})
          gsap.fromTo(secondContent.current, {opacity:0, autoAlpha:0}, {opacity:1, autoAlpha: 1, duration: 2, scrollTrigger: {
            trigger: secondContent.current,
            start: "center bottom",

          }})
          gsap.fromTo(thirdContainer.current, {opacity:0, autoAlpha:0}, {opacity:1, autoAlpha: 1, duration: 2, scrollTrigger: {
            trigger: thirdContainer.current,
            start: "center bottom",

          }})
          gsap.fromTo(fourthPhoto.current, {opacity:0, autoAlpha:0}, {opacity:1, autoAlpha: 1, duration: 2, scrollTrigger: {
            trigger: fourthPhoto.current,
            start: "30% bottom",

          }})
          gsap.fromTo(fourthContent.current, {opacity:0, autoAlpha:0}, {opacity:1, autoAlpha: 1, duration: 2, scrollTrigger: {
            trigger: fourthContent.current,
            start: "30% bottom",

          }})
    })
    

    return (
        <MainContainer>
            <FirstSectionBox>
                <img ref={firstPhotoRef} src={BlogPhoto} />
                <Header ref={firstHeaderRef} variant='h2'>The Best Award Winner Wines</Header>
                
                <Mixology>JUNE 25, 2021</Mixology>
                <div ref={firstTextRef}>
                    <Text style={{ marginBlock: ".5rem" }}>Orci eu lobortis elementum nibh tellus. Sed egestas egestas fringilla phasellus faucibus scelerisque. Vulputate ut pharetra sit amet aliquam. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Arcu dui vivamus a lorem.</Text>
                    <Text>ras porta consectetur enim, vitae bibendum nunc ullamcorper varius. Aliquam mattis vestibulum ornare. Aliquam erat volutpat. Nunc id arcu blandit, pretium metus ac, tincidunt velit. Quisque eu magna ligula. Suspendisse non felis euismod elit euismo.</Text>
               </div>
            </FirstSectionBox>
            <SecondSectionBox>
                <img src={Barmen} ref={secondPhotoRef}/>
                <ContentBox ref={secondContent}>
                    <Header variant='h3'>Recreating An Old Classic</Header>
                    <Text>Orci eu lobortis elementum nibh tellus. Sed egestas egestas fringilla phasellus faucibus scelerisque. Vulputate ut pharetra sit amet aliquam. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Arcu dui vivamus a lorem.</Text>
                    <Text>Ras porta consectetur enim, vitae bibendum nunc ullamcorper varius. Aliquam mattis vestibulum ornare. Aliquam erat volutpat. Nunc id arcu blandit, pretium metus ac, tincidunt velit.</Text>
                    <Text>Quisque eu magna ligula. Suspendisse non felis euismod elit euismod gravida.</Text>
                    <Text>Pellentesque sit amet nisi ante. Integer quis ante sit amet justo feugiat eleifend. Quisque ut auctor libero, non finibus velit.</Text>
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
            </SecondSectionBox>
            <ThirdSectionBox ref={thirdContainer}>
                <ThirdSectionText>
                    “It's sour from the lime, sweet and a little fresh from the Triple Sec/Cointreau and its orange flavor, and has a kick from the vodka”
                </ThirdSectionText>
                <Mixology>Joe Barman</Mixology>
            </ThirdSectionBox>
            <FourthSectionBox>

                <img ref={fourthPhoto} src={Vine} />
                <ForthSectionContent ref={fourthContent}>
                    <Header variant='h3'>Fresh Ingredients are a must-have</Header>
                    <Text style={{marginBottom: ".5rem"}}>Orci eu lobortis elementum nibh tellus. Sed egestas egestas fringilla phasellus faucibus scelerisque. Vulputate ut pharetra sit amet aliquam. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Arcu dui vivamus a lorem.</Text>
                    <Text style={{marginBottom: ".5rem"}}>Ras porta consectetur enim, vitae bibendum nunc ullamcorper varius. Aliquam mattis vestibulum ornare. Aliquam erat volutpat. on felis euis.</Text>
                    <Text style={{marginBottom: ".5rem"}}>Aenean cursus metus vitae ligula maximus pretium. Donec a neque aliquet, finibus leo finibus, tincidunt tortor. Curabitur elementum varius erat. Vivamus sem tellus, efficitur at ex a, dignissim eleifend leo. Cras ac turpis quis arcu posuere dictum semper faucibus enim. Nunc consequat et dui gravida porta. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis convallis, odio id lobortis accumsan, sapien elit tempor ante, eu varius tortor lorem eu sapien.</Text>
                    <Text>Morbi auctor lorem in lacus suscipit congue. Suspendisse id turpis dolor. In et dui imperdiet, interdum eros mattis, semper sapien. Nulla ultricies augue ut ipsum tempor, eu hendrerit justo volutpat.</Text>
                </ForthSectionContent>
            </FourthSectionBox>
        </MainContainer>
    )
}

export default AwardsWinnerWine