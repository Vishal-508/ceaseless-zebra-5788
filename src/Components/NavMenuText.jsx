import {
	useDisclosure,
	MenuItem,
	Menu,
	MenuButton,
	MenuList,
	useColorModeValue,
	Flex,
	Box,
} from "@chakra-ui/react";
import React from "react";

const NavMenuText = ({ name, leftDropDown, rightDropDown }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Menu isOpen={isOpen}>
			<MenuButton
				variant="ghost"
				fontWeight="semibold"
				fontSize="14px"
				py={[4, 4, 4]}
				px={3}
				_hover={{ bg: useColorModeValue("#0294c9", "#0294c9") }}
				borderRadius="none"
				aria-label="Courses"
				onMouseEnter={onOpen}
				onMouseLeave={onClose}
			>
				{name}
			</MenuButton>
			<MenuList onMouseEnter={onOpen} onMouseLeave={onClose} color="black">
				<Flex>
					<Box px={2}>
						{leftDropDown.map((item) => (
							<MenuItem key={item} minW={200} _hover={{ bg: "#bfeaff" }}>
								{item}
							</MenuItem>
						))}
					</Box>

					<Box px={2}>
						{rightDropDown?.map((item) => (
							<MenuItem key={item} minW={200} _hover={{ bg: "#bfeaff" }}>
								{item}
							</MenuItem>
						))}
					</Box>
				</Flex>
			</MenuList>
		</Menu>
	);
};

export default NavMenuText;
