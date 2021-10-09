import {
  Flex,
  Text,
  Button,
} from '@chakra-ui/react'
import Link from 'next/link'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface SliderItemProps {
    bgImage:string,
    continent:string,
    desc:string
    id:string
}
export function SliderItem({bgImage, continent, desc, id}: SliderItemProps){
    return (
        <Flex
            w="100vw"
            h={["250px","450px"]}
            maxH="450px"
            backgroundImage={bgImage}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundPosition="center"
            objectPosition="center"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
        >
            <Link href={`/continent/${id}`} passHref>
                <Button h={['100px', '200px']} w={["25%"]} bg="unset" borderRadius="full" _active={{bg:"rgba(0,0,0,0.4)"}}  _hover={{bg:"rgba(0,0,0,0.2)"}} as="a" display="flex" flexDir="column">
                    <Text _activeLink={{color:'yellow.900'}} _groupActive={{color:'yellow.900'}} color="gray.50" lineHeight={['36px','72px']} fontSize={["24px", "48px"]} fontWeight="700">{continent}</Text>
                    <Text _activeLink={{color:'yellow.900'}} _groupActive={{color:'yellow.900'}} color="gray.100" lineHeight={['21px', '24px']} fontSize={["14px", "24px"]} fontWeight="700">{desc}</Text>
                </Button>
            </Link>
        </Flex>
    )
}