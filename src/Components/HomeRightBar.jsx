import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Flex, List, ListIcon, ListItem, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const HomeRightBar = () => {
  const middle_bg = useColorModeValue("#fff", "rgba(72,73,74,0.88)");
	const middle_color = useColorModeValue("#2B2C2D", "white");
  const border_color = useColorModeValue("1px solid rgb(237,238,240)",  '1px solid rgb(81, 83, 84)')

  return (
    <Flex className="tl-left-second-sub" bg={middle_bg} color={middle_color} border={border_color} >
    <Box className="tl-list-title" >News headlines</Box>
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
  )
}

export default HomeRightBar