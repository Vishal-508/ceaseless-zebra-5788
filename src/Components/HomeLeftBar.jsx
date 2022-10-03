import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, Image, List, ListIcon, ListItem, Text, useColorModeValue } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGlobalData } from "../Redux/AppReducer/action";
import "../Styles/HomeLeftBar.css";



const HomeLeftBar = () => {
const sideData=useSelector(store=>store.appreducer.sideData)
console.log(sideData)
  const dispatch=useDispatch();
  const middle_bg = useColorModeValue("#fff", "rgba(72,73,74,0.88)");
	const middle_color = useColorModeValue("#2B2C2D", "white");
  const border_color = useColorModeValue("1px solid rgb(237,238,240)",  '1px solid rgb(81, 83, 84)')
useEffect(()=>{
  dispatch(getGlobalData())
},[])
  return (
    <Box className="tl-left-container"  >
      <Center className="tl-left-first-sub" borderTop={border_color} bg={middle_bg} color={middle_color} border={border_color} >
        <Image src="https://wassets.hscicdn.com/static/images/nlp-logo.svg" />
        <Text>
          What is Tim David's strike rate in the death overs in T20s since 2021?
        </Text>
       
          <Center>Ask a question</Center>
          
      </Center>
      <Flex className="tl-list-sub-container"  bg={middle_bg} color={middle_color} border={border_color} >
        <Box className="tl-list-title" borderBottom={border_color} >Follow ESPNcricinfo</Box>
        <List spacing={1} className="tl-list-container" >
          {sideData.followItems && sideData.followItems?.map(items=> <ListItem>
            <ListIcon as={ChevronRightIcon} color="rgb(3,169,244)" w={5} h={5} />
              {items.title}
          </ListItem> )}
          
          
        </List>
      </Flex>

      <Flex className="tl-list-sub-container"  bg={middle_bg} color={middle_color} border={border_color} >
        <Box className="tl-list-title" borderBottom={border_color} >ESPN sites</Box>
        <List spacing={1} className="tl-list-container" >
          {sideData.siteItems && sideData.siteItems?.map(items=> <ListItem>
            <ListIcon as={ChevronRightIcon} color="rgb(3,169,244)" w={5} h={5} />
              {items.title}
          </ListItem> )}
          
          
        </List>
      </Flex>
    </Box>
  );
};

export default HomeLeftBar;
{/* <ListItem>
            <ListIcon as={ChevronRightIcon} color="rgb(3,169,244)" w={5} h={5} />
          Lorem ipsum dolor sit amet
          </ListItem>
          <ListItem>
            <ListIcon as={ChevronRightIcon} color="rgb(3,169,244)" w={5} h={5} />
          Lorem ipsum dolor sit amet
          </ListItem>
          <ListItem>
            <ListIcon as={ChevronRightIcon} color="rgb(3,169,244)" w={5} h={5} />
          Lorem ipsum dolor sit amet
          </ListItem> */}