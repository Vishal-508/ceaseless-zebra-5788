import { Box, Grid, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import Topimage from '../TopImage/Topimage'
import style from "./Teams.module.css";
export default function Teams() {
    const teamInternation = [
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/321000/321005.png", title: "Afghanistan" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340400/340493.png", title: "Australia" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/341400/341456.png", title: "Bangladesh" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313114.logo.png", title: "England" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313128.logo.png", title: "India" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313149.logo.png", title: "Ireland" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340500/340505.png", title: "New Zealand" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313129.logo.png", title: "Pakistan" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313150.logo.png", title: "Scotland" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313125.logo.png", title: "South Africa" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340000/340047.png", title: "Sri Lanka" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313147.logo.png", title: "United Arab Emirates" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317600/317615.png", title: "West Indies" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340500/340503.png", title: "Zimbabwe" },]

    const iplTeams = [
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313421.logo.png", title: "Chennai Super Kings" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313422.logo.png", title: "Delhi Capitals" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/334700/334707.png", title: "Gujrat Titans" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313419.logo.png", title: "Kolkata Knight Riders" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/333800/333885.png", title: "Lucknow Super Giants" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/344000/344062.png", title: "Mumbai Indians" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317000/317003.png", title: "Punjab Kings" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313423.logo.png", title: "Rajasthan Royals" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313418.logo.png", title: "Royal Challengers Bangalore" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313480.logo.png", title: "Sunrisers Hydrabad" },]

    const teamsWomens = [
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/321000/321005.png", title: "Afghanistan" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340400/340493.png", title: "Australia" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/341400/341456.png", title: "Bangladesh" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313114.logo.png", title: "England" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313128.logo.png", title: "India" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313149.logo.png", title: "Ireland" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340500/340505.png", title: "New Zealand" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313129.logo.png", title: "Pakistan" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313125.logo.png", title: "South Africa" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340000/340047.png", title: "Sri Lanka" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317600/317615.png", title: "West Indies" },
        { url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340500/340503.png", title: "Zimbabwe" },]

    return (
        <div className={style.container}> 
             
            <Box>
          
                <Box display={"flex"} alignItems={"center"} justifyContent={"space-around"} flexDirection={"column"} p={10}>
                    <Text color={"black"}  w={"80%"} display={"flex"} alignItems={"center"} p={5} boxShadow='xs' rounded='md' bg='white'>POPULAR INTERNATIONAL TEAMS</Text>

                    <SimpleGrid columns={[2, null, 3]} gap={1} w={"80%"} m={"auto"}>

                        {teamInternation.map((el) => (
                            <Box color={"black"}   display={"flex"} alignItems={"center"} p={5} gap={{ base: '2px', md: '3px', lg: '5px' }} boxShadow='xs' rounded='md' bg='white' key={el.index}>
                                <Image src={el.url} w={"25%"} />
                                <Text ontSize={{ base: '14px', md: '16px', lg: '20px' }}>{el.title}</Text>


                            </Box>
                        ))}


                    </SimpleGrid>
                </Box>
                <Box display={"flex"} alignItems={"center"} justifyContent={"space-around"} flexDirection={"column"} p={10}>
                    <Text color={"black"}  w={"80%"} display={"flex"} alignItems={"center"} p={5} boxShadow='xs' rounded='md' bg='white'>IPL 2022 TEAMS</Text>

                    <SimpleGrid columns={[2, null, 3]} gap={1} w={"80%"} m={"auto"}>

                        {iplTeams.map((el) => (
                            <Box color={"black"} display={"flex"} alignItems={"center"} p={5} gap={{ base: '2px', md: '3px', lg: '5px' }} boxShadow='xs' rounded='md' bg='white' key={el.index}>
                                <Image src={el.url} w={"25%"} />
                                <Text fontSize={{ base: '14px', md: '16px', lg: '20px' }}>{el.title}</Text>


                            </Box>
                        ))}


                    </SimpleGrid>
                </Box>
                <Box display={"flex"} alignItems={"center"} justifyContent={"space-around"} flexDirection={"column"} p={10} mb={10}>
                    <Text w={"80%"} display={"flex"} color={"black"} alignItems={"center"} p={5} boxShadow='xs' rounded='md' bg='white'>POPULAR WOMEN'S TEAMS</Text>

                    <SimpleGrid columns={[2, null, 3]} gap={1} w={"80%"} m={"auto"}>

                        {teamsWomens.map((el) => (
                            <Box color={"black"}  display={"flex"} alignItems={"center"} p={5} gap={{ base: '2px', md: '3px', lg: '5px' }} boxShadow='xs' rounded='md' bg='white' key={el.index}>
                                <Image src={el.url} w={"25%"} />
                                <Text  fontSize={{ base: '14px', md: '16px', lg: '20px' }}>{el.title}</Text>


                            </Box>
                        ))}


                    </SimpleGrid>
                </Box>
            </Box>
        </div>
    )
}
