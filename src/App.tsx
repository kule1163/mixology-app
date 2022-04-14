import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"
import Fixed from './components/navbar/Fixed';
import About from './pages/about/About';
import Footer from './footer/Footer';
import Menu from './pages/menu/Menu';
import Event from "./pages/event/Event"
import { SideBarBox } from './pages/home/styles';
import { useAppSelector } from './app/hooks';
import Gallery from './pages/gallery/Gallery';
import Reserve from './pages/reserve/Reserve';
import Blog from './pages/blog/Blog';
import BlogPost from './pages/blogpost/BlogPost';





function App() {
  const show = useAppSelector(state => state.cocktail.show)

  return (
   <div style={{display: "flex", flexDirection: "column", position: "relative", minHeight: "100vh", backgroundColor: "black", boxSizing: "border-box", overflow: "hidden"}}>
   <Fixed />
  <SideBarBox show={show}>
  <Sidebar />
  </SideBarBox>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/event" element={<Event />} />
      <Route path="/reserve" element={<Reserve />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog-post" element={<BlogPost />} />
    </Routes>
    <Footer />
   </div>
  );
}

export default App;
