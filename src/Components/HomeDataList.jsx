import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomeData } from "../Redux/AppReducer/action";
import SingleHomeData from "./SingleHomeData";

const HomeDataList = () => {
	const dispatch = useDispatch();
	const Data = useSelector((store) => store.appreducer.homeData);
  


  useEffect(() => {
    dispatch(getHomeData());
  }, []);
  console.log(Data);
  return (
    <Box  >
    {Data.length>0 && Data.map(item=><SingleHomeData key={item.scribeId} {...item} /> )}
    </Box>
  )

};

export default HomeDataList;
