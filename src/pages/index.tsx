import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import {
  Image,
  Flex,
  Box,
  Text,
  useBreakpointValue,
  Divider,
  Wrap
} from '@chakra-ui/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ItemList } from '../components/ItemList'
import { SliderItem } from '../components/SliderItem';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { api } from '../services/api';

type Continent = {
  id:string;
  name:string;
  subtitle:string;
  image:string;
  info:string;
}

interface HomeProps {
  continents: Continent[]
}

const Home: NextPage<HomeProps> = ({continents}) => {
  const isWideVersion = useBreakpointValue({
    base: false,

    md: true
  })
  
  return (
    <>
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

      <Wrap 
        spacing={["32px"]}
        mx={["50px", "140x"]}
        my={["36px", '90px']} 
        width={["90%","80%"]}
        justify="space-around"
      >
        <ItemList src="./images/cocktail.svg" label="vida noturna"/>
        <ItemList src="./images/surf.svg" label="praia"/>
        <ItemList src="./images/building.svg" label="moderno"/>
        <ItemList src="./images/museum.svg" label="clássico"/>
        <ItemList  src="./images/earth.svg" label="e mais ..."/>
      </Wrap>

      <Divider w={['90px']} orientation="horizontal" />
      <Box 
        fontSize={["20px", "36px"]}
        my={["24px", "52px"]}
      >
        <Text
          textAlign="center"
          fontWeight={["500"]}
        >
          Vamos nessa?
        </Text>
        <Text
          textAlign="center"
          fontWeight={["500"]}
        >
          Então escolha o seu continente
        </Text>
      </Box>
      <Box
        w={["100vw"]}
        maxH={["450px"]}
        maxW="1440px"
        mb={["24px", "64px"]}
      >
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {continents?.map(({id, name, image, subtitle}, index)=>(
            <SwiperSlide key={`${id}${index}`}>
              <SliderItem
                id={id}
                bgImage={image}
                continent={name}
                desc={subtitle}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  )
}

export default Home


export const getStaticProps: GetStaticProps = async () => {
  const {data: continents} = await api.get<Continent[]>('continents')
  return {
    props:{
      continents
    }
  }
} 