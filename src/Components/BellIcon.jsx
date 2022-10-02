import {
	Button,
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	useDisclosure,
	Spacer,
} from "@chakra-ui/react";
import React from "react";
import { BsBellFill } from "react-icons/bs";

const BellIcon = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = React.useRef();
	return (
		<>
			<Button
				borderRadius="none"
				bg="none"
				fontSize="20px"
				py={7}
				px={3}
				_hover={{ bg: "#0294c9" }}
				onClick={onOpen}
			>
				<BsBellFill />
			</Button>

			<AlertDialog
				isOpen={isOpen}
				leastDestructiveRef={cancelRef}
				onClose={onClose}
			>
				<AlertDialogOverlay textAlign="center">
					<AlertDialogContent>
						<AlertDialogHeader fontSize="2xl" fontWeight="bold">
							Latest cricket updates
						</AlertDialogHeader>

						<AlertDialogBody mt={-4} mb={-2}>
							Get notified on all the cricket events, it's more than just
							scores!
						</AlertDialogBody>

						<AlertDialogFooter color="white">
							<Spacer />
							<Button
								colorScheme="gray"
								ref={cancelRef}
								onClick={onClose}
								px={10}
							>
								Not Now
							</Button>
							<Button colorScheme="blue" onClick={onClose} px={10} ml={3}>
								Yes! I'm in
							</Button>
							<Spacer />
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	);
};

export default BellIcon;
