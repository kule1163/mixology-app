import React from 'react'
import PageHeader from '../../components/pageHeader/PageHeader'
import { MainContainer } from './styles'
import GalleryPhoto from "../../assets/galery.jpg"
import OurMoments from '../../components/galleryComp/ourMoments.tsx/OurMoments'
import GalleryImage from '../../components/galleryComp/galleryImage/GalleryImage'
import GalleryInfo from '../../components/galleryComp/galleryInfo/GalleryInfo'
import BookNow from '../../components/galleryComp/booknow/BookNow'

const Gallery = () => {
  
  return (
    <MainContainer>
        <PageHeader header='GALLERY' image={GalleryPhoto} />
        <OurMoments />
        <GalleryImage />
        <GalleryInfo />
        <BookNow />

    </MainContainer>
  )
}

export default Gallery