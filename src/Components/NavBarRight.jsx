import { Flex } from "@chakra-ui/react";
import React from "react";
import BellIcon from "./BellIcon";
import DarkAndLightMode from "./DarkAndLightMode";
import FantasyNav from "./FantasyNav";
import NavMenuText from "./NavMenuText";
import SearchBar from "./SearchBar";
import Translator from "./Translator";

const fantasy = {
	name: "Fantasy",
	img: "https://wassets.hscicdn.com/static/images/fantasy-home.png",
};

const NavBarRight = () => {
	return (
		<Flex>
			<FantasyNav name={fantasy.name} image={fantasy.img} />
			<NavMenuText
				name="Edition IN"
				leftDropDown={["India", "UAE", "USA"]}
				rightDropDown={["England", "AUstralia", "Canada"]}
			/>
			<DarkAndLightMode />
			<BellIcon />
			<Translator leftDropDown={["English", "Hindi"]} />
			<SearchBar />
		</Flex>
	);
};

export default NavBarRight;
