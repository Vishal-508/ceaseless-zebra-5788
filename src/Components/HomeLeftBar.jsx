import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, Image, List, ListIcon, ListItem, Text, useColorModeValue } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import "../Styles/HomeLeftBar.css";

const getGlobalData=()=>{
  return axios.get("https://hs-consumer-api.espncricinfo.com/v1/global/details?lang=en&appItems=true&followItems=true&siteItems=true&featuredItems=true&allTeams=true")
  .then(r=>console.log(r))
  .catch(e=>console.log(e))
}

const HomeLeftBar = () => {
  const middle_bg = useColorModeValue("#fff", "rgba(72,73,74,0.88)");
	const middle_color = useColorModeValue("#2B2C2D", "white");
  const border_color = useColorModeValue("1px solid rgb(237,238,240)",  '1px solid rgb(81, 83, 84)')
useEffect(()=>{
  getGlobalData()
},[])
  return (
    <Box className="tl-left-container"  >
      <Center className="tl-left-first-sub" borderTop={border_color} bg={middle_bg} color={middle_color} border={border_color} >
        <Image src="https://wassets.hscicdn.com/static/images/nlp-logo.svg" />
        <Text>
          What is Tim David's strike rate in the death overs in T20s since 2021?
        </Text>
        <Box>Ask a question</Box>
      </Center>
      <Flex className="tl-left-second-sub"  bg={middle_bg} color={middle_color} border={border_color} >
        <Box className="tl-list-title" >Key Series</Box>
        <List spacing={1} className="tl-list-container" >
          <ListItem>
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
          </ListItem>
          <ListItem>
            <ListIcon as={ChevronRightIcon} color="rgb(3,169,244)" w={5} h={5} />
          Lorem ipsum dolor sit amet
          </ListItem>
        </List>
      </Flex>
    </Box>
  );
};

export default HomeLeftBar;
