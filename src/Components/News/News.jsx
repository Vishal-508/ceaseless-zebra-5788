import { Box, Grid, GridItem, Image, SimpleGrid, Text } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function News() {
  const [newData,setData]=useState([])
  const [mostrated,setRated]=useState([])
  useEffect(()=>{
    let arr=[]
      axios.get("https://espnscore.onrender.com/api/stories").then((res)=>{
       
        setData(res.data)

        
      
      
      }).catch((er)=>console.log(er))
      setRated(newData.reverse())
  },[newData.length])
  return (
    <div>
        {/* <GridItem w='100%' h='10' bg='blue.500' /> */}

     <Box display={"flex"}  m={"auto"} mt={"50px"} gap={"25px"} justifyContent={"center"} alignContent={"center"}>
      
      <Grid templateColumns='repeat(1, 1fr)' gap={4}  w={"55%"} >
        <Box boxShadow='xs'  rounded='md' bg='white' p={4}   mt={5}  fontSize='lg'>
        <Text color={"black"}>
          Latest News
        </Text>
      </Box>
        {newData.length>0&&newData.map((el,index)=>(
        <Box p={4} display={{ md: 'flex' }} boxShadow='xs'  rounded='md' bg='white' key={index}>
        <Box flexShrink={0}>
          <Image
            borderRadius='lg'
            width={{ md: 40 }}
            src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_480,q_50/lsci${el.image.url}`}
            alt='Woman paying for a purchase'
          />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} color={"black"}>
          <Text
            fontWeight='bold'
            textTransform='uppercase'
            fontSize='sm'
            letterSpacing='wide'
            color='teal.600'
          >
            {el.title}
          </Text>
          <Link
            mt={1}
            display='block'
            fontSize='lg'
            lineHeight='normal'
            fontWeight='semibold'
            to={`/singlepagenews/${el.scribeId}`}
            
          >
          {el.summary}
          </Link>
          <Text mt={2} color='gray.500'>
           {el.image.credit}
          </Text>
        </Box>
      </Box>
        ))}
      
      </Grid>
      <SimpleGrid columns={[1, null, 1]}  w={"25%"} h={"fit-content"}  gap={2}>
      <Box boxShadow='xs'  rounded='md' bg='white'display={"flex"} alignItems={"center"} pl={2} mt={5}  fontSize='lg' >
        <Text color={"black"}>
          Most Rated
        </Text>
      </Box>
        {mostrated.length>0&&mostrated.map((el,index)=>(
        <Box p={{base:2,md:3,lg:4}} display={{ md: 'flex' }} boxShadow='xs' rounded='md'  h={"fit-content"}>
        <Box flexShrink={0}>
          <Image
            borderRadius='lg'
            width={{base:10, md: 40 ,lg:40}}
            src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_480,q_50/lsci${el.image.url}`}
          />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} >
          <Text
            fontWeight='bold'
            textTransform='uppercase'
            fontSize='sm'
            letterSpacing='wide'
            color='teal.600'
          >
            {el.title}
          </Text>
      
          <Text mt={2} color='gray.500'>
          {el.image.credit}
          </Text>
        </Box>
        
      </Box>
        ))}
      
      </SimpleGrid>
      </Box>
      <Footer />

    </div>
  )
}


