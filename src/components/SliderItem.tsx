import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import {
  Image,
  Flex,
  Icon,
  Box,
  HStack,
  Text,
  SimpleGrid,
  useBreakpointValue,
  Divider,
} from '@chakra-ui/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ItemList } from '../components/ItemList'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface SliderItemProps {
    bgImage:string,
    continent:string,
    desc:string
}
export function SliderItem({bgImage, continent, desc}: SliderItemProps){
    return (
        <Flex
            w="100vw"
            h={"450px"}
            maxH="450px"
            flexDir="column"
            objectFit="cover"
            backgroundImage={bgImage}
            alignItems="center"
            justifyContent="center"
        >
            <Text color="gray.50" lineHeight={['72px']} fontSize={["48px"]} fontWeight="700">{continent}</Text>
            <Text color="gray.100" lineHeight={['24px']} fontSize={["24px"]} fontWeight="700">{desc}</Text>
        </Flex>
    )
}