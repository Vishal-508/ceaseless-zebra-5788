import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import style from "./Topimage.module.css"
export default function Topimage() {
  return (
   
        <Box  p={10} className={style.container}boxShadow='xs'  rounded={"md"} >
        <Image src="https://tpc.googlesyndication.com/simgad/9166779261420924180?"/>
        </Box>
   
  )
}
