import {
	useDisclosure,
	MenuItem,
	Menu,
	MenuButton,
	MenuList,
	Button,
	useColorModeValue,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import React from "react";

const NavMenuText = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		// <Button
		// 	bg="none"
		// 	py={7}
		// 	px={3}
		// 	colorScheme="blackAlpha"
		// 	borderRadius="none"
		// >
		// 	Live Scores
		// </Button>
		<Menu isOpen={isOpen}>
			<MenuButton
				variant="ghost"
				fontWeight="semibold"
				py={[1, 2, 2]}
				px={4}
				_hover={{ bg: useColorModeValue("#0294c9", "#0294c9") }}
				borderRadius="none"
				aria-label="Courses"
				onMouseEnter={onOpen}
				onMouseLeave={onClose}
			>
				Live Scores
			</MenuButton>
			<MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
				<MenuItem>Menu Item 1</MenuItem>
				<MenuItem>Menu Item 2</MenuItem>
				<MenuItem>Menu Item 3</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default NavMenuText;
