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

import { Header } from '../../components/Header'
import { InfoHighlight } from '../../components/InfoHighlight'
import { CityCard } from '../../components/CityCard'

export default function Continent(){
    return (
        <>
            <Head>
                <title>Continent</title>
            </Head>
            <Header showReturnButton={true}/>
            <Box 
                display="flex"
                justifyContent="center"
                alignItems="end"
                height={["150px", "300px", "500px"]}
                width="100%"
                objectFit="cover"
                objectPosition="center"
                backgroundImage="https://images.unsplash.com/photo-1471989749605-1d14cb3d836e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1503&q=80"
            >
                <Text
                    width="90%"
                    maxW="1440px"
                    textAlign="left"
                    lineHeight={['72px']} fontWeight="600" color="gray.50" fontSize={["48px"]}>
                    Europa
                </Text>
            </Box>
            <Wrap my="5rem" spacing="4.5rem" width="90%" justify={["center", "center", "center","center", "space-between"]} align="center">
                <WrapItem>
                    <Text maxW="600px" align="justify" lineHeight={["36px"]} fontWeight="400" fontSize={["24px"]} color="gray.650">A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste</Text>
                </WrapItem>
                <WrapItem>
                    <Center >
                        <HStack spacing="2.75rem">
                            <InfoHighlight number={50} label="países"/>
                            <InfoHighlight number={60} label="linguas"/>
                            <InfoHighlight number={27} label="cidades + 100"/>
                        </HStack>
                    </Center>
                </WrapItem>
            </Wrap>

            <Box my="5rem" spacing="4.5rem" width="90%" justifyContent="space-between">
                <Text fontWeight="500" color="gray.650" fontSize={["14px", "36px"]} lineHeight={["21px", "54px"]}>
                    Cidades +100
                </Text>
                <Wrap spacing={["45px"]} mt={"40px"}>
                    <CityCard 
                        city="Paris"
                        country="França" 
                        flag_image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAFVBMVEX///8AI5XtKTkAFZJ1frnzgIftHTAVSFmKAAAA/klEQVR4nO3QSQ0AIAADsHH6l4yKPUhaCc2oWTs9586aOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHy4ckD5KrN4eD2boIAAAAASUVORK5CYII="
                        city_image="https://images.unsplash.com/photo-1504896287989-ff1fbde00199?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1633&q=80"
                    />
                    <CityCard 
                        city="Roma"
                        country="Itália" 
                        flag_image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/2560px-Flag_of_Italy.svg.png"
                        city_image="https://images.unsplash.com/photo-1604579803699-127581deabdf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                    />
                    <CityCard 
                        city="Londres"
                        country="Reino Unido" 
                        flag_image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_the_United_Kingdom_%282-3%29.svg/1200px-Flag_of_the_United_Kingdom_%282-3%29.svg.png"
                        city_image="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                    />
                    <CityCard 
                        city="Amsterdã"
                        country="Holanda" 
                        flag_image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAVFBMVEX///+vGyceRIsdQ4uzHChlEBavCx7x19nZ3uoSQYsfRo8RJ1CSkpIuUJIiR40oS48hNFgUKVEaLlQ5CQ1kAw+KfH19gIYIJE8KFi4vUpYhNFcZLVQXyS0lAAADLUlEQVR4nO3ai1KbQBhAYbrUXkTBxGvr+79nuWQJy1k0Oo3JhPO1OPrHSc2RsIS0uL9S6r64+q7UVdvkm6ZsQjYhm5BNyCZkE7IJ2YRsQjYhm5BNyCZkE7IJ2YRsQjYhm5BNyCZkE7IJ2YRsQjYhm5BNyCZkE7IJ2YRsQjYhm5BNyCZkE7IJ2YRsQjYhm5BNyCZkE7IJ2YRsQjYhm5BNyCZkE7IJ2YRsQm2Thx9KPRSPP5V6LG4KpW5sAjYhm5BNyCZkE7IJ2YRsQjYhm5BNyCZkE7IJ2YRsQjYhm5BNyCZkE7IJ2YRsQjYhm5BNyCZkE7IJ2YRsQjYhm5BNyCZkE7IJ2YRsQjYhm5BNyCZkE7IJ2YRsQjYhm5BNyCZkE7IJ2YRsQjahm+Lpl1JPxfNvpZ6L6jqU2T8L44u/4brqmmjKJmQTsgnZhGxCNiGbkE3IJjQ26c90w/6z5Iv1jKdNytuy/RuaOtRNGb9opuPbYRwOGodPjuv/PG4+Oi6Dz52ZLpJNZtxP8mxCNiGbUGzSnPoHOSOxSbu+9112W7to92t+c/C4/tpxONK4CelzJ95UD1v33bNUlz+ug8eTHJuQTcgmtG9SvvOd67G/fnK7u4gw3zKjyx6n+0n3SrlrE7e62V1EOcY4XqCpv2wcduPmzfH8eHJ+v7TT7ieKdk08wE4MTYbnkQbuJ+TxJDE/xtZeQ6kza3EYL5FMTydCf5ZxnHH5uXHuNOhj4+xJ0ztrcWYBv6TxwqlKz+MJje+NnvoHOSNxLe7eE+wvvK1dme4nnrkNDZLjSZl8mAXKHLjeGC/cyVeNP/Wzx0eOY+ywJLVLVbdN3r+Io8PG3acnHHfbh8fj04TrTn9DnW41Rxc4jnuRazHZhPZNGlfindm1x9WvxvvXgONL4nLycY0W/z/bsLcc6xLw2Y6beFv2GBtPalf1Xsb+lc3yunOWv8tjjkeuxTRt0h1pXXkmTdKVZ636Rz828YwtxGdJ9njSn9KubIeZnJn1TbL+5McXqp4+3Kp4qZbdTba/VfW6rartazq+m4w3h4w3C+N2225x3++NF+4kM37jn9z0j3UTH/XLP0ovNOEJ76ohAAAAAElFTkSuQmCC"
                        city_image="https://images.unsplash.com/photo-1547750341-26482cf3a2ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                    />
                </Wrap>
            </Box>
        </>
    )
}