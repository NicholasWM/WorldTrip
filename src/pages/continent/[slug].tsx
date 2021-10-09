import Head from 'next/head'
import {
    Text,
    HStack,
    Wrap,
    WrapItem,
    Box,
    Center,
} from '@chakra-ui/react'

import { Header } from '../../components/Header'
import { InfoHighlight } from '../../components/InfoHighlight'
import { CityCard } from '../../components/CityCard'
import { GetStaticPaths, GetStaticProps } from 'next'
import { api } from '../../services/api'

type Country = {
    id: number,
    flag: string,
    name: string,
}
type City = {
    id:number,
    name:string,
    image:string,
    country: {
        id: number,
        name: string
    },
    continent: {
        id:number,
        name:string
    }
}
interface CityAltered extends Omit<City,'country' | 'continent'> {
    country: Country
} 

interface ContinentProps {
    continent: {
        id: number,
        name: string,
        image: string,
        info: string
    },
    cities:CityAltered[],
    count: {
        cities: number,
        countries: number,
    }
}
export default function Continent({
    cities,
    continent,
    count
}: ContinentProps){
    console.log(cities,continent, count);
    
    return (
        <>
            <Head>
                <title>{continent.name}</title>
            </Head>
            <Header showReturnButton={true}/>
            <Box 
                display="flex"
                justifyContent="center"
                alignItems={["center", "end"]}
                height={["150px", "300px", "500px"]}
                width="100%"
                backgroundSize="cover"
                backgroundImage={continent.image}
            >
                <Text
                    width="90%"
                    maxW="1440px"
                    textAlign={["center", "left"]}
                    lineHeight={["42px", '72px']} 
                    fontWeight="600"
                    color="gray.50"
                    fontSize={["28px", "48px"]}
                >
                    {continent.name}
                </Text>
            </Box>
            <Wrap my={["32px", "5rem"]} spacing={["16px", "4.5rem"]} width="90%" justify={["center", "center", "center","center", "space-between"]} align="center">
                <WrapItem>
                    <Text maxW="600px" align="justify" lineHeight={["21px", "36px"]} fontWeight="400" fontSize={["14px", "24px"]} color="gray.650">{continent.info}</Text>
                </WrapItem>
                <WrapItem>
                    <Center >
                        <HStack spacing="2.75rem">
                            <InfoHighlight number={count?.countries} label="países"/>
                            <InfoHighlight number={count?.countries} label="linguas"/>
                            <InfoHighlight number={count?.cities} label="cidades +100" info={{label:"Quantidade de cidades do continente que está na lista das 100+"}}/>
                        </HStack>
                    </Center>
                </WrapItem>
            </Wrap>

            <Box mb={["37px", "5rem"]} spacing="4.5rem" width="90%">
                <Text fontWeight="500" color="gray.650" fontSize={["24px", "36px"]} lineHeight={["21px", "54px"]}>
                    Cidades +100
                </Text>
                <Wrap spacing={["45px"]} mt={"40px"} justify={["center", "center", "center", "center","left"]}>
                    {cities.map(({name, image, country, id})=>(
                        <CityCard 
                            key={id}
                            city={name}
                            country={country.name} 
                            flag_image={country.flag}
                            city_image={image}
                        />
                    ))}
                </Wrap>
            </Box>
        </>
    )
}


export const getStaticPaths:GetStaticPaths = async () => {
    return {
      paths:[],
      fallback: "blocking",
    }

};



export const getStaticProps: GetStaticProps = async ({params})=>{
    const {data: continent} = await api.get(`/continents/${params?.slug}`)
    
    const {data:cities} = (await api.get<City[]>(`/cities?continent.id=${params?.slug}`))

    let countryIds =  await Promise.all([...new Set(cities.map(({country})=> country.id))]
        .map(async id => (await api.get<Country>(`country/${id}`)).data))
    let citiesWCountry = cities.map((city) => ({...city, country: countryIds.find(({id}) => id === city.country.id)}))
    console.log(continent,cities);
    
    return {
        props:{
            continent,
            cities: citiesWCountry,
            count: {
                cities: citiesWCountry.length,
                countries: countryIds.length,
            }
        }
    }
}