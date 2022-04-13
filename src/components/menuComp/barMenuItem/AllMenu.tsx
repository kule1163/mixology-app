import React, { useEffect, useRef } from 'react'
import Cocktail from "../../../assets/menucocktail.jpg"
import Wine from "../../../assets/menuwine.jpg"
import Bite from "../../../assets/menubite.jpg"
import { BarItemContainer } from './styles'
import BarMenuItem from './BarMenuItem'
import { cocktails, wines, bites } from '../../../utils/menuItems'

const AllMenu = () => {
  const cocktailRef = useRef<HTMLDivElement>(null)
  const bottlesRef = useRef<HTMLDivElement>(null)
  const bitesRef = useRef<HTMLDivElement>(null)



  return (
    <BarItemContainer>
      {/* <div ref={cocktailRef}> */}
        <BarMenuItem
          background={Cocktail}
          header="Fresh Cocktails"
          mixology='FRUITY OR SOUR'
          list={cocktails}
        />
      {/* </div> */}
      {/* <div ref={bottlesRef}> */}
        <BarMenuItem
          background={Wine}
          header="Wine list"
          mixology='BOTTLES'
          list={wines}
        />
     {/*  </div> */}
     {/*  <div ref={bitesRef}> */}
        <BarMenuItem
          background={Cocktail}
          header="SNACKS"
          mixology='Bites'
          list={bites}
        />
     {/*  </div> */}
    </BarItemContainer>
  )
}

export default AllMenu