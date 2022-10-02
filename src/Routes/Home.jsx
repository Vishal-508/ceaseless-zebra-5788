import { Box, Center } from '@chakra-ui/react';
import "../Styles/Home.css";
import HomeDataList from "../Components/HomeDataList"
import HomeLeftBar from '../Components/HomeLeftBar';
import HomeRightBar from '../Components/HomeRightBar';
import NavBar from '../Components/Navbar';
const Home = () => {
 
  return (
    <div>

    {/* <NavBar/> */}
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
    </div>
  )
}

export default Home

// https://tpc.googlesyndication.com/simgad/12909437448303152171?



// https://tpc.googlesyndication.com/simgad/14898303338203898667?