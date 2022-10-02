import React from "react";
import {
	useDisclosure,
	Menu,
	MenuButton,
	MenuList,
	useColorModeValue,
	Box,
	Image,
	Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../Redux/AuthReducer/action";

const LogOut = ({ handleLogout }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const dispatch = useDispatch();

	const handleLogOut = () => {
		dispatch(Logout());
	};

	const user = useSelector((state) => state.auth);
	console.log("user", user);
	return (
		<Menu isOpen={isOpen}>
			<MenuButton
				variant="ghost"
				fontWeight="semibold"
				fontSize="20px"
				px={2}
				_hover={{ bg: useColorModeValue("#0294c9", "#0294c9") }}
				borderRadius="none"
				aria-label="Courses"
				onMouseEnter={onOpen}
				onMouseLeave={onClose}
			>
				<Image
					src={user.photourl}
					alt="avatar"
					width="40px"
					borderRadius="50%"
				/>
			</MenuButton>
			<MenuList
				onMouseEnter={onOpen}
				onMouseLeave={onClose}
				color="black"
				textAlign="right"
			>
				<Box px={2}>
					Want to Exit?
					<Button ml={4} colorScheme="red" onClick={handleLogOut}>
						LOGOUT
					</Button>
				</Box>
			</MenuList>
		</Menu>
	);
};

export default LogOut;
