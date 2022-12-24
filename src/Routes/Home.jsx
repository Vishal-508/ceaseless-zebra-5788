import { Box, Center, Flex, useColorModeValue } from '@chakra-ui/react';
import "../Styles/Home.css";
import HomeDataList from "../Components/HomeDataList"
import HomeLeftBar from '../Components/HomeLeftBar';
import HomeRightBar from '../Components/HomeRightBar';

import NavBar from '../Components/Navbar';
import Footer from '../Components/Footer/Footer';
const Home = () => {
  const bg = useColorModeValue("rgb(249,249,251)", "#000");
	const color = useColorModeValue("#2B2C2D", "white");


  return (
    <div>

    {/* <NavBar/> */}
   <Center  w="100%" bg={bg} color={color} pt="50px" >
    <Flex  margin="auto" className='tl-home-container' bg={bg} color={color} >

      <Box className='tl-left-container' >
        <HomeLeftBar/>
      </Box>
      <Box className='tl-middle-container'  >
        <HomeDataList />
      </Box>
      <Box className='tl-right-container' >
        <HomeRightBar/>
      </Box>
    </Flex>
   </Center>
   <Footer />

    </div>
  )
}

export default Home

// https://tpc.googlesyndication.com/simgad/12909437448303152171?



// https://tpc.googlesyndication.com/simgad/14898303338203898667?
