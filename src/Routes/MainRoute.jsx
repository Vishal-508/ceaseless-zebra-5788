import { Box, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from '../Components/Navbar'
import SinglePageNews from '../Components/SinglePageNews/SinglePageNews'
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
        
      </Routes>
    </Box>
  )
}

export default MainRoute