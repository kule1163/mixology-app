import React from 'react'
import PageHeader from '../../components/pageHeader/PageHeader'
import { MainContainer } from './styles'
import MenuImage from "../../assets/menu.jpg"
import DrinksBites from '../../components/menuComp/drinksbite/DrinksBites'
import BarMenu from '../../components/menuComp/barMenu/BarMenu'
import AllMenu from '../../components/menuComp/barMenuItem/AllMenu'



const Menu = () => {
  
  return (
    <MainContainer>
        <PageHeader image={MenuImage} header="MENU"/>
       
        <DrinksBites />
       
        <BarMenu />
        
       <AllMenu />
    </MainContainer>
  )
}

export default Menu