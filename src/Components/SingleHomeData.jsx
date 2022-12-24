import { Box, Center, Flex, Image, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import "../Styles/SingleHomeData.css"
import { Link } from 'react-router-dom'

const SingleHomeData = ({title, summary,image,id}) => {
  const middle_bg = useColorModeValue("#fff", "rgba(72,73,74,0.88)");
	const middle_color = useColorModeValue("#2B2C2D", "white");
  const border_color = useColorModeValue("1px solid rgb(237,238,240)",  '1px solid rgb(81, 83, 84)')

  return (
    <Link  to={`/singlepagenews/${id}`} >
    <Flex className='tl-single-card' bg={middle_bg} color={middle_color} border={border_color} >
      <Box>
        <Image className='tl-single-image'  src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci${image.url}`} alt='' />
        </Box>
      <Box textAlign="left" ><Box className="tl-single-title" >{title}</Box>
      <Box   className='tl-single-summary' borderTop={border_color} >{summary}</Box></Box>
    </Flex>
    </Link>
  )
}

export default SingleHomeData

