import React, { useEffect, useRef } from 'react'
import Cocktail from "../../../assets/menucocktail.jpg"
import Wine from "../../../assets/menuwine.jpg"
import Bite from "../../../assets/menubite.jpg"
import { BarItemContainer } from './styles'
import BarMenuItem from './BarMenuItem'
import { cocktails, wines, bites } from '../../../utils/menuItems'

const AllMenu = () => {
  return (
    <BarItemContainer>
        <BarMenuItem
          background={Cocktail}
          header="Fresh Cocktails"
          mixology='FRUITY OR SOUR'
          list={cocktails}
        />
        <BarMenuItem
          background={Wine}
          header="Wine list"
          mixology='BOTTLES'
          list={wines}
        />
        <BarMenuItem
          background={Cocktail}
          header="SNACKS"
          mixology='Bites'
          list={bites}
        />
    </BarItemContainer>
  )
}

export default AllMenu