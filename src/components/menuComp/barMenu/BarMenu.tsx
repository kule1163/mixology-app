import React from 'react'
import { snackMenu } from '../../../utils/menuItems'
import { Header } from "../../homeComp/experience/styles"
import {ItemBox,MainContainer} from "./styles"

const BarMenu = () => {
  

  return (
    <MainContainer>
        {snackMenu.map(item => (
            <ItemBox key={item.id} background={item.img}>
                <Header style={{zIndex: "10"}} variant="h3">{item.text}</Header>
            </ItemBox>
        ))}
    </MainContainer>
  )
}

export default BarMenu