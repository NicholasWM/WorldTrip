import Head from 'next/head'
import {
    Image,
    Avatar,
    Icon,
    Text,
    Stack,
    HStack,
    Wrap,
    WrapItem,
    Box,
    Flex,
    Center,

} from '@chakra-ui/react'

interface CityCardProps {
    city:string;
    country:string;
    flag_image:string;
    city_image:string;
}

export function CityCard({
    city,
    country,
    flag_image,
    city_image,
}:CityCardProps){
    return (
        <Box width={["256px"]} my={['40px']}>
            <Image  height={["173px"]} objectFit="fill" src={city_image}/>
            <Box bg="white" borderWidth={["1px"]} borderColor={"#FFBA08"}>
                <Flex px={["24px"]} my={["18px"]} alignItems="center" justifyContent="space-between">
                    <Box>
                        <Text color="gray.650" fontSize={["20px"]} fontWeight="600" textStyle="card">{city}</Text>
                        <Text mt="12px" color="gray.500" fontSize={["16px"]} fontWeight="500" textStyle="card">{country}</Text>
                    </Box>
                    <Avatar w={['30px']} h={['30px']} src={flag_image}/>
                </Flex>
            </Box>
        </Box>
    )
}