import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, Image, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import "../Styles/HomeLeftBar.css";

const getGlobalData=()=>{
  return axios.get("https://hs-consumer-api.espncricinfo.com/v1/global/details?lang=en&appItems=true&followItems=true&siteItems=true&featuredItems=true&allTeams=true")
  .then(r=>console.log(r))
  .catch(e=>console.log(e))
}

const HomeLeftBar = () => {

useEffect(()=>{
  getGlobalData()
},[])
  return (
    <Box className="tl-left-container">
      <Center className="tl-left-first-sub">
        <Image src="https://wassets.hscicdn.com/static/images/nlp-logo.svg" />
        <Text>
          What is Tim David's strike rate in the death overs in T20s since 2021?
        </Text>
        <Box>Ask a question</Box>
      </Center>
      <Flex className="tl-left-second-sub">
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
