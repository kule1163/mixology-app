import React, {useRef, useEffect} from 'react'
import { menuItems } from '../utils/menuItems'
import { MenuContainer, MenuText } from './styles'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from 'react-router-dom';
import CustomLink from '../customLink/CustomLink';

const FooterMenu = () => {
    gsap.registerPlugin(ScrollTrigger)

    const ref = useRef<HTMLDivElement>(null)
    const navigate = useNavigate()

    const handleClick = (path:string) => {
        window.scrollTo(0, 0)
    
        /* navigate(path) */
    }

    useEffect(() => {
        gsap.fromTo(ref.current, {opacity:0, autoAlpha:0}, {opacity:1, autoAlpha: 1, duration: 2, scrollTrigger: {
            trigger: ref.current,
            start: "bottom bottom",
          }})
    })

    return (
   <MenuContainer ref={ref}>
       {menuItems.map(item => (
           <div key={item.id} onClick={() => handleClick(item.path)}  style={{padding: ".5rem 1.1rem",marginInline: "auto", display: "inline-flex", alignItems: "center", justifyContent: "center"}}>
      
               <CustomLink className='customText' color='#b26500' to={`${item.path}`}>
                {item.title}
               </CustomLink>
        
           </div>
       ))}
   </MenuContainer>
  )
}

export default FooterMenu