import React, {useRef, useEffect} from 'react'
import PageHeader from '../../components/pageHeader/PageHeader'
import { Container, Label, MainContainer, ReadMore, SectionContainer, SingleItemBox } from './styles'
import BlogImage from "../../assets/barwomen.jpg"
import { Header,Text } from '../../components/homeComp/experience/styles'
import { FaAngleDoubleRight } from 'react-icons/fa';
import { blogItems } from '../../utils/blogItems'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDispatch } from 'react-redux'
import { setPost } from '../../features/cocktails/cocktailSlice'
import { useNavigate } from 'react-router-dom'

const Blog = () => {
  gsap.registerPlugin(ScrollTrigger)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const revealRefs = useRef<HTMLDivElement[]>([])
  revealRefs.current = []

  const handleClick = (header: string) => {
    window.scrollTo(0, 0)
    dispatch(setPost(header))
    navigate("/blog-post")
  }

  const addToRefs = (el:HTMLDivElement) => {
    if(el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  useEffect(() => {
    revealRefs.current.forEach((el:HTMLDivElement, index:number) => {
      gsap.fromTo(el, {opacity:0, autoAlpha:0}, {opacity:1, autoAlpha: 1, duration: 2, scrollTrigger: {
        id: `section-${index}`,
        trigger: el,
        start: "20% bottom",
      }})
    })
  }, [])
  
  return (
    <MainContainer>
        <PageHeader header='BLOG' image={BlogImage}/>
       <Container>
       <SectionContainer>
        
        {blogItems.map(item =>(
         <SingleItemBox key={item.id} ref={addToRefs}>
            <img src={item.image}/>
            <Header variant='h3'>{item.header}</Header>
            <Text>{item.text}</Text>
            <div style={{display: "flex", alignItems: "center"}}>
            <ReadMore onClick={() => handleClick(item.header)}>Read More</ReadMore>
            <FaAngleDoubleRight color='#b26500' />
            </div>
            <Label>{item.label}</Label>
        </SingleItemBox>
        
        ))}
         </SectionContainer>
       </Container>
    </MainContainer>
  )
}

export default Blog