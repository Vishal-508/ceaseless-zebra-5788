import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomeData } from "../Redux/AppReducer/action";
import Footer from "./Footer/Footer";
import SingleHomeData from "./SingleHomeData";
import Topimage from "./TopImage/Topimage";

const HomeDataList = () => {
	const dispatch = useDispatch();
	const Data = useSelector((store) => store.appreducer.homeData);
  


  useEffect(() => {
    dispatch(getHomeData());
  }, []);
  
  return (
   
     
    <Box  >
     
    {Data.length>0 && Data.map(item=><SingleHomeData key={item.scribeId} {...item} /> )}
    
    </Box>
 
  )

};

export default HomeDataList;
