import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomeData } from "../Redux/AppReducer/action";
import SingleHomeData from "./SingleHomeData";

const HomeDataList = () => {
	const dispatch = useDispatch();
	const Data = useSelector((store) => store.AppReducer.homeData);

	useEffect(() => {
		dispatch(getHomeData());
	}, []);
	console.log(Data);
	return (
		<>
			{Data.length > 0 &&
				Data.map((item) => <SingleHomeData key={item.id} {...item} />)}
		</>
	);
};

export default HomeDataList;
