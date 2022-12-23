import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function News() {
  const [newData,setData]=useState([])
  const [mostrated,setRated]=useState([])
  useEffect(()=>{
    let arr=[]
      axios.get("http://localhost:8080/stories").then((res)=>{
       
        setData(res.data)

        
      
      
      }).catch((er)=>console.log(er))
      setRated(newData.reverse())
  },[newData.length])
  return (
    <div>
        {/* <GridItem w='100%' h='10' bg='blue.500' /> */}

     <Box display={"flex"}  m={"auto"} mt={"50px"} gap={"25px"} justifyContent={"center"} alignContent={"center"}>
      
      <Grid templateColumns='repeat(1, 1fr)' gap={4}  w={"55%"} >
        <Box boxShadow='xs'  rounded='md' bg='white' p={4}     fontSize='lg'>
        <Text>
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
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
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
      <Grid templateColumns='repeat(1, 1fr)'  w={"25%"} >
      <Box boxShadow='xs'  rounded='md' bg='white'display={"flex"} alignItems={"center"} pl={2}  fontSize='lg'>
        <Text>
          Most Rated
        </Text>
      </Box>
        {mostrated.length>0&&mostrated.map((el,index)=>(
        <Box p={2} display={{ md: 'flex' }} boxShadow='xs'  rounded='md' bg='white'  key={index}>
        <Box flexShrink={0}>
          <Image
            borderRadius='lg'
            width={{ md: 40 }}
            src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_480,q_50/lsci${el.image.url}`}
            alt='Woman paying for a purchase'
          />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md:6 }}>
                  <Link
            mt={1}
            display='block'
            fontSize='lg'
            // lineHeight='normal'
            fontWeight='semibold'
            href='#'
          >
          {el.title}
          </Link>
          <Text mt={2} color='gray.500'>
           {el.image.credit}
          </Text>
        </Box>
      </Box>
        ))}
      
      </Grid>
      </Box>
    </div>
  )
}
