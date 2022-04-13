import React from 'react'
import {CloseBox,MainContainer,MenuItemsContainer,MenuItem} from "./styles"
import Logo from "../../assets/logo.png"
import { menuItems } from '../../utils/menuItems'
import { IoMdClose as CloseIcon} from 'react-icons/io';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setShow } from '../../features/cocktails/cocktailSlice';
import { useNavigate } from 'react-router-dom';
import CustomLink from '../../customLink/CustomLink';



const Sidebar = () => {
  const show = useAppSelector(state => state.cocktail.show)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleClick = () => {
    window.scrollTo(0, 0)
    dispatch(setShow(false))
    /* navigate(path) */
  }

  return (
    <MainContainer>
        <img src={Logo}/>
        <MenuItemsContainer>
          {menuItems.map(item => (
           <div /* style={{marginBottom: "2rem"}}  */ key={item.id} className='sidebarBox'>
            <CustomLink className='sidebarText' onClick={handleClick} color="black"  to={item.path}>
                {item.title}
            </CustomLink>
           </div>
          ))}
        </MenuItemsContainer>
        <CloseBox onClick={() => dispatch(setShow(false))}>
            <CloseIcon color='white' cursor="pointer" style={{fontSize: "2em"}}/>
        </CloseBox>
    </MainContainer>
  )
}

export default Sidebar