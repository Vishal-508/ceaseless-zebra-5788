import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React from "react";
import NavMenuText from "./NavMenuText";

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
							<NavMenuText />
							<Button
								bg="none"
								py={7}
								px={3}
								colorScheme="blackAlpha"
								borderRadius="none"
							>
								Series
							</Button>
							<Button
								bg="none"
								py={7}
								px={3}
								colorScheme="blackAlpha"
								borderRadius="none"
							>
								Teams
							</Button>
							<Button
								bg="none"
								py={7}
								px={3}
								colorScheme="blackAlpha"
								borderRadius="none"
							>
								News
							</Button>
							<Button
								bg="none"
								py={7}
								px={3}
								colorScheme="blackAlpha"
								borderRadius="none"
							>
								Features
							</Button>
							<Button
								bg="none"
								py={7}
								px={3}
								colorScheme="blackAlpha"
								borderRadius="none"
							>
								Videos
							</Button>
							<Button
								bg="none"
								py={7}
								px={3}
								colorScheme="blackAlpha"
								borderRadius="none"
							>
								Stats
							</Button>
						</Flex>
					</Box>
				</Flex>
			</Box>
		</Box>
	);
};

export default NavBar;
