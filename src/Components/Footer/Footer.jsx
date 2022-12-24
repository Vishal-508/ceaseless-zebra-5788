import { Box ,Flex,SimpleGrid,Text} from '@chakra-ui/react'
import React from 'react'
import style from './Footer.module.css'
export default function Footer() {
  return (
   <div className={style.container}>
        <Box display={"flex"} alignItems={"center"}  justifyContent={"space-between"} backgroundColor="black" w={"100%"} p={2}>
            <SimpleGrid columns={{base:1,md:2,lg:5,}}   p={2} fontSize={{base:20,md:25,lg:18}} w={{base:"40%",md:"50%",lg:"50%"}}>
                <Text color={"white"}>Terms of Use|</Text>
                <Text color={"white"}>Privacy Policy|</Text>
               
               
                <Text color={"white"}>Feedback|</Text>
            </SimpleGrid>
            <Box fontSize={{base:20,md:16,lg:18}} pr={5}>
                <Text color={"white"}>
                © 2022 ESPN Sports Media Ltd. All rights reserved
                </Text>
            </Box>

        </Box>
  </div>
  )
}
