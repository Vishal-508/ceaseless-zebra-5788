import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";
import "./Swiper.css";

// import required modules
import { Pagination } from "swiper";
import { Box, Image, Text } from "@chakra-ui/react";

export default function SwiperSlider() {
  const [data,setData]=useState([])


  useEffect(()=>{
      let arr=[]
      
      axios.get("http://localhost:8080/matches").then((res)=>{
         console.log(res.data)
         for(let i=0;i<res.data.length;i++){
          
          if(res.data[i].state==="LIVE"){
            arr.push(res.data[i])
          }
         
         }
        setData(arr)
       
      }).catch((er)=>{
          console.log(er)
      })
   

  },[])
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={2}
        navigation={true}

        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.length>0&&data.map((el)=>(
        <SwiperSlide className="main_div" >
          <Box  display={"flex"} textAlign={"left"} justifyContent={"space-between"} gap={2} w={"95%"}><Text color={"green"}>{el.stage}</Text><Text color={"gray"}>{el.format}</Text><Text color={"gray"}>{el.ground.town.name}</Text></Box>
          <Box display={"flex"} w={"95%"} justifyContent={"space-between"} >
            <Box display={"flex"} gap={2}>
              <Image className="flag" src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci${el.teams[0].team.imageUrl}`} />
            <Text color={"green"}>{el.teams[0].team.name}</Text>
            </Box>
            <Text> {el.teams[0].score}</Text>
            </Box>
            <Box display={"flex"} w={"95%"} justifyContent={"space-between"} >
            <Box display={"flex"} gap={2}>
              <Image className="flag" src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci${el.teams[1].team.imageUrl}`} />
            <Text color={"green"}>{el.teams[1].team.name}</Text>
            </Box>
            <Text> {el.teams[1].score}</Text>
            </Box>
            <Box display={"flex"} w={"95%"} justifyContent={"space-between"}>
              
              <Text >{el.statusText}</Text>

            </Box>
            <Box display={"flex"} w={"95%"} justifyContent={"space-between"}>
                 <Text textAlign={"left"}>{el.title}</Text>
            </Box>
         
        </SwiperSlide>

        ))}
    
      </Swiper>
    </>
  );
}
