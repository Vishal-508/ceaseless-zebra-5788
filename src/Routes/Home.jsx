import { Box, Center } from '@chakra-ui/react';
import "../Styles/Home.css";
import HomeDataList from "../Components/HomeDataList"
const Home = () => {
 
  return (
   <Center className='tl-home-container' >
    
      <Box className='tl-left-container' ></Box>
      <Box className='tl-middle-container' >
        <HomeDataList />
      </Box>
      <Box className='tl-right-container' ></Box>
   </Center>
  )
}

export default Home