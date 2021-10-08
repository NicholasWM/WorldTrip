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
const Home: NextPage = () => {
  const isWideVersion = useBreakpointValue({
    base: false,

    md: true
  })
  return (
    <Flex 
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      maxW="1440px"
    >
      <Head>
        <title>Home</title>
      </Head>
      <Header/>
      <Flex 
        py={["1.75rem", "3.5rem","3rem","5rem"]}
        px={["1rem", "8.75rem"]}
        h={['163px' ,'335px']} 
        w="100%"
        justifyContent="space-between"
        backgroundImage="./images/background.svg"
      >
        <Box>
          <Text
            fontWeight={500}
            lineHeight={["30px", "54px"]}
            fontSize={["20px", '36px']}
            color="gray.50"
          >
            5 Continentes,
          </Text>
          <Text
            fontWeight="500"
            lineHeight={["30px", "54px"]}
            fontSize={["20px", '36px']}
            color="gray.50"
            marginBottom={2}
          >
            infinitas possibilidades.
          </Text>
          <Text
            color="gray.100"
            fontWeight="400"
            lineHeight={["21px", "30px"]}
            fontSize={["14px", "20px"]}
            maxW="450px"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        {isWideVersion && (
          <Image 
            w={"417px"}
            h={"270"}
            marginTop="10px"
            transform="rotate(3deg)"
            src="./images/airplane.svg"
          />
        )}
      </Flex>


      <Flex mx="140px" my={['90px']}  width="90%" flexDir="row" justifyContent="space-between">
        <ItemList src="./images/cocktail.svg" label="vida noturna"/>
        <ItemList src="./images/surf.svg" label="praia"/>
        <ItemList src="./images/building.svg" label="moderno"/>
        <ItemList src="./images/museum.svg" label="clássico"/>
        <ItemList src="./images/earth.svg" label="e mais ..."/>
      </Flex>

      <Divider w={['90px']} orientation="horizontal" />
      <Box my={["52px"]}>
        <Text
          textAlign="center"
          fontSize={["36px"]}
          fontWeight={["500"]}
        >
          Vamos nessa?
        </Text>
        <Text
          textAlign="center"
          fontSize={["36px"]}
          fontWeight={["500"]}
        >
          Então escolha o seu continente
        </Text>
      </Box>
      <Box
        w={["100vw"]}
        h={["450px"]}
        maxH={["450px"]}
        maxW="1440px"
        mb={["24px", "64px"]}
      >
        <Swiper
        // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide >
            <Flex
              w="100vw" 
              h={"450px"} 
              maxH="450px" 
              flexDir="column"
              objectFit="cover"
              backgroundImage="https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="gray.50" lineHeight={['72px']} fontSize={["48px"]} fontWeight="700">Europa</Text>
              <Text color="gray.100" lineHeight={['24px']} fontSize={["24px"]} fontWeight="700">O continente mais antigo.</Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </Box>
    </Flex>
  )
}

export default Home
