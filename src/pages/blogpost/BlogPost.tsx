import React from 'react'
import PageHeader from '../../components/pageHeader/PageHeader'
import { MainContainer } from './styles'
import BlogPhoto from "../../assets/barwomen.jpg"
import PostBlogSection from '../../components/blogPostComp/blogpost/PostBlogSection'
import CommentForm from '../../components/blogPostComp/commentForm/CommentForm'

const BlogPost = () => {
  return (
    <MainContainer>
        <PageHeader image={BlogPhoto} header='BLOG'/>
        <PostBlogSection />
        <CommentForm />
    </MainContainer>
  )
}

export default BlogPost