import { Box, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Live from '../Components/Live/Live'
import NavBar from '../Components/Navbar'
import News from '../Components/News/News'
import SinglePageNews from '../Components/SinglePageNews/SinglePageNews'
import MultipleItems from '../Components/Swiper/Swiper'
import Teams from '../Components/Teams/Teams'
// import Storage from '../Components/swiper/swiper'
import Home from './Home'

const MainRoute = () => {
  const bg = useColorModeValue("rgb(249,249,251)", "#000");
	
  return (
    <Box  >
      <Box position="sticky" top="0" zIndex="2"   >
      </Box>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/singlepagenews/:id' element={<SinglePageNews />}/>
        <Route path='/live' element={<Live />}/>
        <Route path='/news' element={<News />}/>
        <Route path='/teams' element={<Teams />}/>


        
      </Routes>
    </Box>
  )
}

export default MainRoute