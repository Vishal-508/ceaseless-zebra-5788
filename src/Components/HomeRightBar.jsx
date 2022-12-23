import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Flex, List, ListIcon, ListItem, useColorModeValue,Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGlobalData } from '../Redux/AppReducer/action'

const HomeRightBar = () => {

  const sideData=useSelector(store=>store.appreducer.sideData)
console.log(sideData)
  const dispatch=useDispatch();
  const middle_bg = useColorModeValue("#fff", "rgba(72,73,74,0.88)");
	const middle_color = useColorModeValue("#2B2C2D", "white");
  const border_color = useColorModeValue("1px solid rgb(237,238,240)",  '1px solid rgb(81, 83, 84)')
  useEffect(()=>{
    dispatch(getGlobalData())
  },[dispatch])
  return (
    <Box>

    
    <Flex className="tl-list-sub-container" bg={middle_bg} color={middle_color} border={border_color} >
    <Box className="tl-list-title" borderBottom={border_color} >News headlines</Box>
    <List spacing={1} className="tl-list-container" >
          {sideData.testTeams && sideData.testTeams?.map(items=> <ListItem>
            <ListIcon as={ChevronRightIcon} color="rgb(3,169,244)" w={5} h={5} />
              {items.name}
          </ListItem> )}
          
          
        </List>
  </Flex>
  <Flex className="tl-list-sub-container" bg={middle_bg} color={middle_color} border={border_color} >
  {/* <Box className="tl-list-title" borderBottom={border_color} >News headlines</Box> */}
  <List spacing={1} className="tl-list-container" >
        {sideData.featuredItems && sideData.featuredItems?.map(items=> <ListItem className='tl-right-single-item' >
          <Image src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci${items.previewImage.url}`} />
          <Box>{items.title} </Box>
            
        </ListItem> )}
        
        
      </List>
</Flex>
</Box>
  )
}

export default HomeRightBar