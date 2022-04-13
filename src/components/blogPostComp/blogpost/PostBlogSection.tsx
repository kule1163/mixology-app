import React, { useState } from 'react'
import { FirstSectionBox, MainContainer, ComponentDisplay, ComponentContainer, ButtonContainer, ButtonBox, PrevBox, NextBox, HeaderText, TextBox, ButtonText } from './styles'
import { blogPageItems } from '../../../utils/blogPageItems'
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { useAppSelector } from '../../../app/hooks'





const PostBlogSection = () => {

  const post = useAppSelector(state => state.cocktail.post)

  const [currentIndex, setCurrentIndex] = useState<number>(1)
  const [header, setHeader] = useState<string>(post.length > 0 ? post : "Our Barman’s secret tips")

  const currentItem = blogPageItems.find(item => item.header === header)
  const c = blogPageItems.findIndex(item => item.header === header)

  const prevBlogItem = c > 0 && blogPageItems[c - 1].header
  const nextBlogItem = c < blogPageItems.length - 1 && blogPageItems[c + 1].header

  return (
    <MainContainer>

      {currentItem && (<currentItem.item />)}

      <ButtonContainer>

        {prevBlogItem && (
          <PrevBox onClick={() => {
            setHeader(prevBlogItem)
            window.scrollTo(0, 0)
            setCurrentIndex(c)
          }} className='button'>


            <IoIosArrowBack className='icon' />
            <TextBox>
              <ButtonText>PREVIOUS</ButtonText>
              <HeaderText
              >
                {prevBlogItem}
              </HeaderText>
            </TextBox>

          </PrevBox>
        )}

        {nextBlogItem && (
          <NextBox onClick={() => {
            setHeader(nextBlogItem)
            window.scrollTo(0, 0)
            setCurrentIndex(c)
          }} className='button'>

            <TextBox>
              <ButtonText>NEXT</ButtonText>
              <HeaderText
              >{nextBlogItem}
              </HeaderText>
            </TextBox>
            <IoIosArrowForward className='icon' />

          </NextBox>
        )}

      </ButtonContainer>

    </MainContainer>
  )
}

export default PostBlogSection