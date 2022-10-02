import { Box, Center } from '@chakra-ui/react';
import "../Styles/Home.css";
import HomeDataList from "../Components/HomeDataList"
import HomeLeftBar from '../Components/HomeLeftBar';
import HomeRightBar from '../Components/HomeRightBar';
const Home = () => {
 
  return (
   <Center className='tl-home-container' >
    
      <Box className='tl-left-container' >
        <HomeLeftBar/>
      </Box>
      <Box className='tl-middle-container' >
        <HomeDataList />
      </Box>
      <Box className='tl-right-container' >
        <HomeRightBar/>
      </Box>
   </Center>
  )
}

export default Home

// https://tpc.googlesyndication.com/simgad/12909437448303152171?



// https://tpc.googlesyndication.com/simgad/14898303338203898667?