import { Box ,Text} from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
  return (
    <div>
        <Box display={"flex"} alignItems={"center"} w={"100%"} justifyContent={"space-evenly"} backgroundColor={"black"} position={"fixed"} bottom={"0"} m={"auto"} left={"0"} right={"0"}>
            <Box display={"flex"} alignItems={"center"} justifyContent={"space-arround"} p={5}>
                <Text color={"white"}>Terms of Use|</Text>
                <Text color={"white"}>Privacy Policy|</Text>
                <Text color={"white"}>Interest-Based Ads|</Text>
                <Text color={"white"}>Addendum to the Global Privacy Policy|</Text>
                <Text color={"white"}>Feedback|</Text>
            </Box>
            <Box>
                <Text color={"white"}>
                © 2022 ESPN Sports Media Ltd. All rights reserved
                </Text>
            </Box>

        </Box>
    </div>
  )
}
