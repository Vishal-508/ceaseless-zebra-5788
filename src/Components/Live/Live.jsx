import { Image, Box, SimpleGrid, Text, Tabs, TabList, Tab, TabPanels, TabPanel, Spinner } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Footer from '../Footer/Footer'
import style from "./Live.module.css"
export default function Live() {
  const [data, setData] = useState([])
  const [resultData, setResult] = useState([])
  const [isLoading,setLoading]=useState(false)

  useEffect(() => {
    let arr = []
    let arr2 = []
    setLoading(true)
    axios.get("https://espnscore.onrender.com/api/matches").then((res) => {
      setLoading(false)
      //    console.log(res.data)
      for (let i = 0; i < res.data.length; i++) {

        if (res.data[i].state === "LIVE") {
          arr.push(res.data[i])
        }
        else {
          arr2.push(res.data[i])
        }
      }
      setData(arr)
      setResult(arr2)
    }).catch((er) => {
      console.log(er)
    })


  }, [data.length])
  // console.log(data)
  if(isLoading){
    return  <Spinner
    thickness='7px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
    margin={"auto"}
    position="fixed"
    left={window.innerWidth/2}
    top={window.innerHeight/2}
    

  />
  }
  return (
    <div >
      <Tabs align='center'>
        <TabList boxShadow='xs' w={"50%"} rounded={"md"} color={"black"}>
          <Tab >
            Live Score
          </Tab>
          <Tab >
            Result
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SimpleGrid columns={2} spacing={10} m={"auto"} w={"80%"}>
              {data.length > 0 && data.map((el) => (
                <Box textAlign={"left"} p={4} display={{ md: 'flex' }} key={el.index} boxShadow='xs' rounded='md' bg='white'>
                  <Box flexShrink={0}>
                    <Image
                      mt={"50px"}
                      borderRadius='lg'
                      width={{ md: 10 }}
                      src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci${el.teams[0].team.imageUrl}`}
                      alt='Woman paying for a purchase'
                    />
                    <Image
                      borderRadius='lg'
                      width={{ md: 10 }}
                      src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci${el.teams[1].team.imageUrl}`}
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
                      {el.slug}
                    </Text>
                    <Text>
                      {el.title}
                    </Text>
                    <Box display={{ lg: "flex" }} justifyContent={"space-arround"} gap={"50px"} mt={{ base: 2 }}>
                      <Text mt={2} color='gray.500'>
                        {
                          el.slug.split("vs")[0]
                        }
                      </Text>
                      <Text mt={2} color='gray.500'>
                        {
                          el.teams[0].score
                        }
                      </Text>
                    </Box>
                    <Box display={{ lg: "flex" }} justifyContent={"space-between"} >
                      <Text mt={2} color='gray.500'>
                        {
                          el.slug.split("vs")[1]
                        }
                      </Text>
                      <Text mt={2} color='gray.500'>
                        {
                          el.teams[1].score
                        }
                      </Text>
                    </Box>
                    <Box display={{ lg: "flex" }} justifyContent={"space-between"} >
                      <Text mt={2} color='green.500'>
                        {el.state}
                      </Text>
                      <Text>
                        {el.format}
                      </Text>
                    </Box>
                    <Box>
                      <Text mt={2} color='yellow.500'>
                        {el.statusText}
                      </Text>

                    </Box>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </TabPanel>
          {/* https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313300/313322.logo.png       */}
          <TabPanel>
            <SimpleGrid columns={2} spacing={10} m={"auto"} w={"80%"}>
              {resultData.length > 0 && resultData.map((el) => (
                <Box textAlign={"left"} p={4} display={{ md: 'flex' }} key={el.index} boxShadow='xs' rounded='md' bg='white'>
                  <Box flexShrink={0}>
                    <Image
                      mt={"50px"}
                      borderRadius='lg'
                      width={{ md: 10 }}
                      src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci${el.teams[0].team.imageUrl}`}
                      alt='Woman paying for a purchase'
                    />
                    <Image
                      borderRadius='lg'
                      width={{ md: 10 }}
                      src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci${el.teams[1].team.imageUrl}`}
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
                      {el.slug}
                    </Text>
                    <Text>
                      {el.title}
                    </Text>
                    <Box display={{ lg: "flex" }} justifyContent={"space-arround"} gap={"50px"} mt={{ base: 2 }}>
                      <Text mt={2} color='gray.500'>
                        {
                          el.slug.split("vs")[0]
                        }
                      </Text>
                      <Text mt={2} color='gray.500'>
                        {
                          el.teams[0].score
                        }
                      </Text>
                    </Box>
                    <Box display={{ lg: "flex" }} justifyContent={"space-between"} >
                      <Text mt={2} color='gray.500'>
                        {
                          el.slug.split("vs")[1]
                        }
                      </Text>
                      <Text mt={2} color='gray.500'>
                        {
                          el.teams[1].score
                        }
                      </Text>
                    </Box>
                    <Box display={{ lg: "flex" }} justifyContent={"space-between"} >
                      <Text mt={2} color='green.500'>
                        {el.state}
                      </Text>
                      <Text>
                        {el.format}
                      </Text>
                    </Box>
                    <Box>
                      <Text mt={2} color='yellow.500'>
                        {el.statusText}
                      </Text>

                    </Box>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>



      <Footer />

    </div>
  )
}
