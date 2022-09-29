import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
import React from "react";
import NavMenuText from "./NavMenuText";

const links = [
	{
		name: "Live Scores",
		left: ["Live Scores Home", "Results", "Season Views", "Marsh Cup"],
		right: ["Schedule", "Month View", "International Calender"],
	},
	{
		name: "Series",
		left: [
			"India v South Africa",
			"IND-A v NZ-A",
			"UAE v Bangladesh",
			"Desktop Scoreboard",
			"County Div1",
			"CPL 2022",
			"Legends League",
			"Test Championship",
			"CWC Super League",
			"-Future series-",
		],
		right: [
			"Women's Asia Cup",
			"Pakistan v England",
			"West Indies v New Zealand",
			"Sheffield Shield",
			"County Div2",
			"Road Safety",
			"Men's T20 World Cup",
			"Women's Championship",
		],
	},

	{
		name: "Teams",
		left: [
			"Australia",
			"Bangladesh",
			"England",
			"India",
			"New Zealand",
			"Pakistan",
			"South Africa",
			"Sri Lanka",
			"West Indies",
			"Zimbabwe",
		],
		right: [
			"Afghanistan",
			"Ireland",
			"Namibia",
			"Nepal",
			"Netherlands",
			"Oman",
			"PNG",
			"Scotland",
			"UAE",
			"USA",
		],
	},

	{
		name: "News",
		left: [
			"News Home",
			"Future of ODIs",
			"Ball-tampering",
			"Technology in cricket",
			"Racism",
		],
		right: [],
	},

	{
		name: "Features",
		left: [
			"Features Home",
			"Writers",
			"Photo galleries",
			"The Cricket Monthly",
		],
		right: [],
	},

	{
		name: "Videos",
		left: [
			"Videos Home",
			"T20 Time Out",
			"Hindi Videos",
			"25 Questions",
			"News and Analysis",
			"Interviews",
			"Features",
			"Press Conference",
			"YouTube",
		],
		right: [
			"T20 Time Out Hindi",
			"Players in focus",
			"Match Day",
			"Haan Ya Naa",
			"Fantasy Pick",
			"Polite Enquiries",
			"Run Order",
			"Newsroom",
		],
	},

	{
		name: "Stats",
		left: ["Stats home", "AskCricinfo", "IPL 2022", "Statsguru", "SuperStats"],
		right: ["2022 records", "All records", "Players", "Grounds", "Rankings"],
	},
];

const NavBar = () => {
	return (
		<Box bg="tomato" w="100%" background="rgb(3,169,244)" color="white">
			<Box mx={110}>
				{/* website logo */}
				<Flex>
					<Box>
						<Image
							src="https://wassets.hscicdn.com/static/images/logo.png"
							alt="ESPNcricinfo"
							width={138}
							mx={10}
							my={4}
						/>
					</Box>
					{/* menu items */}
					<Box>
						<Flex color="white">
							{links.map((item) => (
								<NavMenuText
									name={item.name}
									leftDropDown={item.left}
									rightDropDown={item.right}
								/>
							))}
						</Flex>
					</Box>
					{/* right part */}
					<Spacer />
					<Box>
						<Flex color="white">
							{links.map((item) => (
								<NavMenuText
									name={item.name}
									leftDropDown={item.left}
									rightDropDown={item.right}
								/>
							))}
						</Flex>
					</Box>
				</Flex>
			</Box>
		</Box>
	);
};

export default NavBar;