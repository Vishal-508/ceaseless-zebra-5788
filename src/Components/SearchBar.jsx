import { Button } from "@chakra-ui/react";
import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = () => {
	return (
		<Button
			borderRadius="none"
			bg="none"
			fontSize="24px"
			py={7}
			px={3}
			_hover={{ bg: "#0294c9" }}
		>
			<IoSearchSharp />
		</Button>
	);
};

export default SearchBar;
