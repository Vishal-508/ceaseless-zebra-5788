import { Box, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Live from '../Components/Live/Live'
import NavBar from '../Components/Navbar'
import SinglePageNews from '../Components/SinglePageNews/SinglePageNews'
import MultipleItems from '../Components/Swiper/Swiper'
// import Storage from '../Components/swiper/swiper'
import Home from './Home'

const MainRoute = () => {
  const bg = useColorModeValue("rgb(249,249,251)", "#000");
	
  return (
    <Box  >
      <Box position="sticky" top="0" zIndex="2"   >
      <NavBar/>
      </Box>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/singlepagenews/:id' element={<SinglePageNews />}/>
        <Route path='/live' element={<Live />}/>
      </Routes>
    </Box>
  )
}

export default MainRoute