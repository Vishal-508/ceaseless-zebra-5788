import { Button, useColorMode } from "@chakra-ui/react";
import React from "react";
import { CgSun } from "react-icons/cg";
import { IoMoon } from "react-icons/io5";

const DarkAndLightMode = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<header>
			<Button
				onClick={toggleColorMode}
				borderRadius="none"
				bg="none"
				fontSize="20px"
				py={7}
				px={3}
				_hover={{ bg: "#0294c9" }}
			>
				{colorMode === "light" ? <IoMoon /> : <CgSun />}
			</Button>
		</header>
	);
};

export default DarkAndLightMode;
