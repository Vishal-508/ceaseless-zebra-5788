import { Menu, MenuButton, Image, Flex } from "@chakra-ui/react";
import React from "react";

const FantasyNav = ({ name, image }) => {
	return (
		<Menu>
			<MenuButton
				variant="ghost"
				fontWeight="semibold"
				fontSize="14px"
				py={[4, 4, 4]}
				px={3}
				_hover={{ bg: "#0294c9" }}
				borderRadius="none"
				aria-label="Courses"
			>
				<Flex>
					<Image src={image} alt="fantageLogo" width={5} mr={2} />
					{name}
				</Flex>
			</MenuButton>
		</Menu>
	);
};

export default FantasyNav;
