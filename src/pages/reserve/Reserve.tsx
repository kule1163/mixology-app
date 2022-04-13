import React from 'react'
import PageHeader from '../../components/pageHeader/PageHeader'
import {MainContainer} from "./styles"
import ReservePhoto from "../../assets/reservepage.jpg"
import VisitUs from '../../components/reserveComp/visitUs/VisitUs'

const Reserve = () => {
  return (
    <MainContainer>
        <PageHeader image={ReservePhoto} header="RESERVE"/>
        <VisitUs/>
    </MainContainer>
  )
}

export default Reserve