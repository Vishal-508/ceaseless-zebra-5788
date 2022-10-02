import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Flex, List, ListIcon, ListItem } from '@chakra-ui/react'
import React from 'react'

const HomeRightBar = () => {
  return (
    <Flex className="tl-left-second-sub">
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