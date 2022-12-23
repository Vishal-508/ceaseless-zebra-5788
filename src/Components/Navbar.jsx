import { Box, Flex, Image, Spacer, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import LoginAndSignUp from "./LoginAndSignUp";
import LogOut from "./LogOut";
import NavBarRight from "./NavBarRight";
import NavMenuText from "./NavMenuText";

const links = [
	{
		name: "Live Scores",
	    path:"live"
	},
	{
		name: "Series",
		path:"/series"
		
	},

	{
		name: "Teams",
		path:"/teams"
		
	},

	{
		name: "News",
		path:"/news"
		
	},

	{
		name: "Features",
		path:""
	},

	{
		name: "Videos",
		path:""
	},

	{
		name: "Stats",
		path:""
	},
];

const NavBar = () => {
	//Navbar Colors

	const bg = useColorModeValue("rgb(3,169,244)", "#222021");
	const color = useColorModeValue("whitesmoke", "white");

	const user = useSelector((state) => state.auth);

	return (
		<Box w="100%" background={bg} color={color}  box-shadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" >
			<Box mx={110}>
				{/* website logo */}
				<Flex>
					<Box>
						<Link to={"/"}>
						<Image
							src="https://wassets.hscicdn.com/static/images/logo.png"
							alt="ESPNcricinfo"
							width={138}
							mx={10}
							my={4}
						/>
						</Link>
					</Box>
					{/* menu items */}
					<Box color="white" display={"flex"} alignItems={"center"} justifyContent={"space-evenly"} gap={5}>
					
							{links.map((item) => (
								<Link to={item.path}>
								{item.name}
								</Link>
							))}
						
					</Box>
					{/* right part */}
					<Spacer />
					<Box>
						<Flex color="white">
							<NavBarRight />
							{/* login and logout feature */}
							{user.token === "" ? <LoginAndSignUp /> : <LogOut />}
						</Flex>
					</Box>
				</Flex>
			</Box>
		</Box>
	);
};

export default NavBar;
