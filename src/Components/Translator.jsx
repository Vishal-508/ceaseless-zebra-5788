import {
	useDisclosure,
	MenuItem,
	Menu,
	MenuButton,
	MenuList,
	useColorModeValue,
	Box,
} from "@chakra-ui/react";
import React from "react";
import { SiGoogletranslate } from "react-icons/si";

const Translator = ({ leftDropDown }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Menu isOpen={isOpen}>
				<MenuButton
					variant="ghost"
					fontWeight="semibold"
					fontSize="20px"
					py={[4, 4, 4]}
					px={3}
					_hover={{ bg: useColorModeValue("#0294c9", "#0294c9") }}
					borderRadius="none"
					aria-label="Courses"
					onMouseEnter={onOpen}
					onMouseLeave={onClose}
				>
					<SiGoogletranslate />
				</MenuButton>
				<MenuList onMouseEnter={onOpen} onMouseLeave={onClose} color="black">
					<Box px={2}>
						{leftDropDown.map((item) => (
							<MenuItem key={item} minW={200} _hover={{ bg: "#bfeaff" }}>
								{item}
							</MenuItem>
						))}
					</Box>
				</MenuList>
			</Menu>
		</>
	);
};

export default Translator;
