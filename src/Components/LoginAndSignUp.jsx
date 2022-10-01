import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	Text,
	FormControl,
	Input,
	FormLabel,
	Box,
	Flex,
	Spacer,
	Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { LoginData, Signup } from "../Redux/AuthReducer/action";

const LoginAndSignUp = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const initialRef = React.useRef(null);

	const user = useSelector((state) => state.auth.token);
	const dispatch = useDispatch();

	//SignUp
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	//singup
	const [emailLogin, setEmailLogin] = useState("");
	const [passwordLogin, setPasswordLogin] = useState("");

	const SendingSignUp = () => {
		dispatch(Signup(email, password));
	};

	const SendingLogin = () => {
		dispatch(LoginData(emailLogin, passwordLogin));
	};

	console.log("user info", user);
	return (
		<>
			<Button
				onClick={onOpen}
				borderRadius="none"
				bg="none"
				fontSize="20px"
				py={7}
				px={3}
				_hover={{ bg: "#0294c9" }}
			>
				<FaUserAlt />
			</Button>

			{/* modal */}

			<Modal onClose={onClose} size="2xl" isOpen={isOpen}>
				<ModalOverlay />
				<ModalContent borderTop="8px solid rgb(3,169,244)" pb={10}>
					<ModalCloseButton />
					<Tabs isFitted variant="enclosed">
						<TabList mb="1em">
							<Tab>
								<Text fontWeight="bold" fontSize={20} py={2}>
									Login
								</Text>
							</Tab>
							<Tab>
								<Text fontWeight="bold" fontSize={20} py={2}>
									SignUp
								</Text>
							</Tab>
						</TabList>
						<TabPanels px={100}>
							<TabPanel>
								<ModalBody pb={6}>
									<FormControl>
										<FormLabel>Email</FormLabel>
										<Input
											ref={initialRef}
											placeholder="Enter your Email"
											onChange={(e) => setEmailLogin(e.target.value)}
										/>
									</FormControl>

									<FormControl mt={4}>
										<FormLabel>Password</FormLabel>
										<Input
											placeholder="Enter your password"
											onChange={(e) => setPasswordLogin(e.target.value)}
										/>
									</FormControl>
								</ModalBody>
								<ModalFooter>
									<Button
										_hover={{ bg: "blue" }}
										w="400px"
										margin="20px 0px"
										bg="blue.500"
										color="white"
										onClick={SendingLogin}
									>
										LOGIN
									</Button>
								</ModalFooter>
								<Flex>
									<Spacer />
									<Text>Dont have an account?</Text>

									<Button
										size="sm"
										variant="ghost"
										colorScheme="blue"
										mt={-1}
										_hover={{ bg: "none" }}
									>
										SignUp
									</Button>
									<Spacer />
								</Flex>

								<Box textAlign="center" mt={2} fontWeight="bold" color={"red"}>
									OR
								</Box>

								<Button
									_hover={{ bg: "gray.100" }}
									w="390px"
									margin="20px 25px 0px"
									bg="whitesmoke"
									color="black"
									p={6}
								>
									<Image
										src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
										width={30}
									/>
									<Text px={10}>Continue with Google</Text>
								</Button>
							</TabPanel>

							{/* sign up  */}
							<TabPanel>
								<ModalBody pb={6}>
									<FormControl>
										<FormLabel>Email</FormLabel>
										<Input
											placeholder="Enter your Email"
											onChange={(e) => setEmail(e.target.value)}
										/>
									</FormControl>

									<FormControl mt={4}>
										<FormLabel>Password</FormLabel>
										<Input
											placeholder="Enter your password"
											onChange={(e) => setPassword(e.target.value)}
										/>
									</FormControl>
								</ModalBody>
								<ModalFooter>
									<Button
										_hover={{ bg: "red" }}
										w="400px"
										margin="20px 0px"
										bg="red.500"
										color="white"
										onClick={SendingSignUp}
									>
										SIGN UP
									</Button>
								</ModalFooter>

								{/* <Button
									_hover={{ bg: "gray.100" }}
									w="390px"
									margin="20px 25px 0px"
									bg="whitesmoke"
									color="black"
									p={6}
								>
									<Image
										src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
										width={30}
									/>
									<Text px={10}>Continue with Google</Text>
								</Button> */}
							</TabPanel>
						</TabPanels>
					</Tabs>
				</ModalContent>
			</Modal>
		</>
	);
};

export default LoginAndSignUp;
