import { Box, Flex, IconButton, Image, Spacer, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuItemOption,
	MenuGroup,
	MenuOptionGroup,
	MenuDivider,
} from '@chakra-ui/react'
import LoginAndSignUp from "./LoginAndSignUp";
import LogOut from "./LogOut";
import NavBarRight from "./NavBarRight";
import NavMenuText from "./NavMenuText";
import { AddIcon, ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";

const links = [
	{
		name: "Live Scores",
		path: "live"
	},
	{
		name: "Series",
		path: "/series"

	},

	{
		name: "Teams",
		path: "/teams"

	},

	{
		name: "News",
		path: "/news"

	},

	{
		name: "Features",
		path: ""
	},

	{
		name: "Videos",
		path: ""
	},

	{
		name: "Stats",
		path: ""
	},
];

const NavBar = () => {
	//Navbar Colors
	let [isWindo, setWindo] = useState(window.innerWidth)

	const bg = useColorModeValue("rgb(3,169,244)", "#222021");
	const color = useColorModeValue("whitesmoke", "white");

	const user = useSelector((state) => state.auth);
	window.addEventListener('resize', function () {

		setWindo(window.innerWidth)

	});
	return (
		<Box w="100%" background={bg} color={color} box-shadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" h={"auto"} position={"relati"}>
			<Box mx={110} >
				{/* website logo */}
				<Flex justifyContent={"space-between"} gap={5} alignItems={"center"} >
					<Box >
						<Link to={"/"}>
							<Image
								src="https://wassets.hscicdn.com/static/images/logo.png"
								alt="ESPNcricinfo"
								width={isWindo>970?138:110}
								height={"90%"}
							
							/>
						</Link>
					</Box>
					{/* menu items */}
					{isWindo > 970 && <Box color="white" display={"flex"} alignItems={"center"} justifyContent={"space-evenly"} gap={5}>

						{links.map((item) => (
							<Link to={item.path}>
								{item.name}
							</Link>
						))}

					</Box>}
					{isWindo < 970 && 

						<Menu>
							<MenuButton rightIcon={<ChevronDownIcon />}>
								More option
							</MenuButton>
							<MenuList>
								{links.map((item) => (
									<MenuItem color={"black"}>
										<Link to={item.path}>
											{item.name}
										</Link>
									</MenuItem>

								))}

							</MenuList>
						</Menu>
					}
					{/* right part */}
					<Spacer />
					{isWindo > 970 && <Box>
						<Flex color="white">
							<NavBarRight />
							{/* login and logout feature */}
							{user.token === "" ? <LoginAndSignUp /> : <LogOut />}
						</Flex>
					</Box>}
					{isWindo < 970 &&
						<Menu >
							<MenuButton
								as={IconButton}
								aria-label='Options'
								icon={<HamburgerIcon />}
								variant='outline'
								color={"white"}
								position={"absolute"}
								right={"10"}
								mt={1}
								
							/>
							<MenuList color={"black"}>
								<MenuItem icon={<AddIcon />} color={"black"}>
									<NavBarRight />
								</MenuItem>
								<MenuItem icon={<AddIcon />} color={"black"} zIndex={700}>
									{user.token === "" ? <LoginAndSignUp /> : <LogOut />}
								</MenuItem>



							</MenuList>
						</Menu>




					}
				</Flex>
			</Box>
		</Box>
	);
};

export default NavBar;
