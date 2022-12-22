import { Box, Center, Flex, Image, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import "../Styles/SingleHomeData.css"
import { Link } from 'react-router-dom'

const SingleHomeData = ({ title, summary, image, id }) => {
  const middle_bg = useColorModeValue("#fff", "rgba(72,73,74,0.88)");
  const middle_color = useColorModeValue("#2B2C2D", "white");
  const border_color = useColorModeValue("1px solid rgb(237,238,240)", '1px solid rgb(81, 83, 84)')
  // console.log('hii')
  return (
    <Link to={`/singlepagenews/${id}`} >
      <Flex className='tl-single-card' bg={middle_bg} color={middle_color} border={border_color} >
        <Box>
          <Image className='tl-single-image' src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci${image.url}`} alt='' />
        </Box>
        <Box textAlign="left" ><Box className="tl-single-title" >{title}</Box>
          <Box className='tl-single-summary' borderTop={border_color} >{summary}</Box></Box>
      </Flex>
    </Link>
  )
}

export default SingleHomeData

// https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/

// authorId: 23
// byline: "Nagraj Gollapudi"
// categoryType: "OTHERS"
// day: null
// generatedAt: "2022-10-01T01:48:02.234Z"
// genreId: 1
// genreName: "News"
// genreType: "NEWS"
// id: 308243


// image:
// caption: "Jasprit Bumrah conceded fifty runs in his four-over spell"
// credit: "BCCI"
// height: 205
// id: 346576
// longCaption: "Jasprit Bumrah conceded fifty runs in his four-over spell, India vs Australia, 3rd T20I, Hyderabad, September 25, 2022\n"
// objectId: 1336523


// peerUrls:
// FILM:"/db/PICTURES/CMS/346500/346576.jpg"
// SQUARE: "/db/PICTURES/CMS/346500/346576.10.jpg"
// WIDE: "/db/PICTURES/CMS/346500/346576.6.jpg"

// photographer:null
// slug:"jasprit-bumrah-conceded-fifty-runs-in-his-four-over-spell"
// url: "/db/PICTURES/CMS/346500/346576.5.jpg"
// width: 365

// isLive: false
// isLiveBlog: false
// language: "en"
// matchMeta: null
// modifiedAt: "2022-09-30T17:24:35.000Z"
// objectId: 1337465
// publishedAt: "2022-09-30T17:14:00.000Z"
// scribeId: 34696757
// seoTitl: "T20 World Cup 2022 - India - Sourav Ganguly says Jasprit Bumrah is not out of the T20 World Cup yet"
// showModifiedAt: false
// showPublishedAt: true
// slug:"t20-world-cup-2022-india-sourav-ganguly-says-jasprit-bumrah-is-not-out-of-the-t20-world-cup-yet"
// subTitle: ""
// summary: "The BCCI president added that a final decision could be taken in the \"next two or three days\""
// title: "Ganguly: Bumrah is not out of the T20 World Cup yet"